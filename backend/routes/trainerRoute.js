import express from 'express';
import { loginTrainer, trainerList, appointmentsTrainer, appointmentCancle, appointmentComplete } from '../controllers/trainerController.js';
import authTrainer from '../middlewares/authTrainer.js';

const trainerRouter = express.Router();

trainerRouter.post("/login", loginTrainer)
trainerRouter.get("/list", trainerList)
trainerRouter.get("/appointments", authTrainer, appointmentsTrainer)
trainerRouter.post('/complete-appointment', authTrainer, appointmentComplete);
trainerRouter.post('/cancle-appointment', authTrainer, appointmentCancle);

export default trainerRouter;