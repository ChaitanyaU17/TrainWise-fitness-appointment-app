import express from 'express';
import { addTrainer, allTrainers, loginAdmin, appointmentAdmin, appointmentCancle, adminDashboard } from '../controllers/adminController.js';
import upload from '../middlewares/multer.js';
import authAdmin from '../middlewares/authAdmin.js';
import { changeAvailablity } from '../controllers/trainerController.js';

const adminRouter = express.Router();

adminRouter.post('/add-trainer', authAdmin , upload.single('image'), addTrainer);
adminRouter.post('/login', loginAdmin );
adminRouter.post('/all-trainers', authAdmin, allTrainers );
adminRouter.post('/change-availability', authAdmin, changeAvailablity );
adminRouter.get('/appointments', authAdmin, appointmentAdmin);
adminRouter.post('/cancle-appointment', authAdmin, appointmentCancle);
adminRouter.get('/dashboard', authAdmin, adminDashboard);

export default adminRouter;
