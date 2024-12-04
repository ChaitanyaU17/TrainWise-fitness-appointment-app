import validator from 'validator';
import bcrypt from 'bcrypt';
import { v2 as cloudinary } from 'cloudinary';
import trainerModel from '../models/TrainerModel.js';
import jwt from 'jsonwebtoken';

//API for adding trainer

const addTrainer = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body;
        const imageFile = req.file;
        // console.log({ name, email, password, speciality, degree, experience, about, fees, address } ,imageFile);

        //checking for all data to add trainer
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.json({success: false, message: 'Missing Details'})
        }

        //validating email format
        if (!validator.isEmail(email)) {
            return res.json({success:false, message: 'Please enter a valid email'})
        }

        //validating strong password
        if (password.length < 8) {
            return res.json({success:false, message: 'Please enter a strong password'})
        }

        //hashing trainer password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" } );
        const imageUrl = imageUpload.secure_url;

        const trainerData = {
            name,
            email,
            image: imageUrl,
            password: hashedPassword,
            speciality,
            degree,
            about,
            experience,
            fees,
            address: JSON.parse(address),
            date: Date.now()
        }

        const newTrainer = new trainerModel(trainerData);
        await newTrainer.save();
        
        res.json({success: true, message: 'Trainer Added'});

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

// API for admin login 
const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if( email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD ) {
            const token = jwt.sign(email+password, process.env.JWT_SECRETE);
            res.json({ success: true, token});
        } else {
            res.json({ success: false, message: 'Invalid credentials' });
        }

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export { addTrainer, loginAdmin };
