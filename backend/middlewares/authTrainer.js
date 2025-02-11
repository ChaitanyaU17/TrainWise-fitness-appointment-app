import jwt from 'jsonwebtoken'

// trainer authentication middleware
const authTrainer = async (req, res, next) => {
    try {
        const { dToken } = req.headers;
        if (!dToken) {
            return res.json({ success: false, message: 'Not Authorized Login Again' });
        }
        const token_decode = jwt.verify(dToken, process.env.JWT_SECRET);
        req.user = { id: token_decode.id }; // Attach to req.user
        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export default authTrainer;