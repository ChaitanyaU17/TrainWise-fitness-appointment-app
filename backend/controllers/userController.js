import validator from 'validator';
import bcrypt from 'bcrypt';
import userModel from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import { v2 as cloudinary } from 'cloudinary';

//API to register user
const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        if (!name || !email || !password) {
            return res.json({ success: false, message: 'Missing Details' });
        }
        
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: 'Enter a valid email' });
        }
        
        if (password.length < 8) {
            return res.json({ success: false, message: 'Enter a strong password' });
        }
        

        //hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const userData = {
            name,
            email,
            password : hashedPassword
        }

        const newUser = await userModel(userData);
        const user = await newUser.save();

        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET);
        res.json({sucess:true, token});


    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});
    }
}

//API for user login
const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await userModel.findOne({email});

        if (!user) {
            return res.json({success: false, message: 'User does not exist'});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = jwt.sign({id:user._id}, process.env.JWT_SECRET);
            res.json({sucess:true, token});
        } else {
            res.json({success:false, message:'Invalid Credentials'});
        }
    } catch (error) {
        console.log(error);
        res.json({sucess:false, message:error.message});
    }
}

// API to get user profile data
const getProfile = async (req, res) => {

    try {
        const { userId } = req.body
        const userData = await userModel.findById(userId).select('-password')

        res.json({ success: true, userData })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

//API to update user profile 

const updateProfile = async (req, res) => {
    try {
        const { userId, name, phone, address, dob, gender } = req.body;
        const imageFile = req.file;

        // Check for missing data
        if (!name || !phone || !dob || !gender) {
            return res.json({ success: false, message: 'Data Missing' });
        }

        // Update user details
        await userModel.findByIdAndUpdate(userId, {
            name,
            phone,
            address: address ? JSON.parse(address) : undefined,
            dob,
            gender,
        });

        // Handle image upload if provided
        if (imageFile) {
            const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
                resource_type: 'image',
            });
            const imageUrl = imageUpload.secure_url;

            // Update user profile image
            await userModel.findByIdAndUpdate(userId, { image: imageUrl });
        }

        return res.json({ success: true, message: 'Profile Updated' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

export { registerUser, loginUser, getProfile, updateProfile };
