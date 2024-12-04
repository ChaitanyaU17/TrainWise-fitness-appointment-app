import express from 'express';
import { addTrainer, loginAdmin } from '../controllers/adminController.js';
import upload from '../middlewares/multer.js';
import authAdmin from '../middlewares/authAdmin.js';

const adminRouter = express.Router();

adminRouter.post('/add-trainer', authAdmin , upload.single('image'), addTrainer);
adminRouter.post('/login', loginAdmin );

export default adminRouter;
