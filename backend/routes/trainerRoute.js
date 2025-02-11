import express from 'express';
import { loginTrainer, trainerList, appointmentsTrainer, appointmentCancle, appointmentComplete, trainerDashboard, trainerProfile, updateTrainerProfile } from '../controllers/trainerController.js';
import authTrainer from '../middlewares/authTrainer.js';

const trainerRouter = express.Router();

trainerRouter.post("/login", loginTrainer)
trainerRouter.get("/list", trainerList)
trainerRouter.get("/appointments", authTrainer, appointmentsTrainer)
trainerRouter.post('/complete-appointment', authTrainer, appointmentComplete);
trainerRouter.post('/cancle-appointment', authTrainer, appointmentCancle);
trainerRouter.get('/dashboard', authTrainer, trainerDashboard);
trainerRouter.get('/profile', authTrainer, trainerProfile);
trainerRouter.post('/update-profile', authTrainer, updateTrainerProfile);

export default trainerRouter;