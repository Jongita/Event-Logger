import express from 'express';
import { LoggerController } from '../conttrolers/logger.controller';

const loggerRouter=express.Router();

loggerRouter.get("/", LoggerController.getAll)

export {loggerRouter};