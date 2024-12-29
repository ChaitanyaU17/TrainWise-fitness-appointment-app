import express from 'express';
import { trainerList } from '../controllers/trainerController.js';

const trainerRouter = express.Router();

trainerRouter.get('/list', trainerList);

export default trainerRouter;