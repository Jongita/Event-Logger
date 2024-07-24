import express from 'express';
import { LoggerController } from '../conttrolers/logger.controller';

const loggerRouter=express.Router();

loggerRouter.get("/", LoggerController.getAll)
loggerRouter.get("/:id", LoggerController.getEvent)
loggerRouter.post("/", LoggerController.insert)
loggerRouter.put("/", LoggerController.update)
loggerRouter.delete("/:id", LoggerController.delete)

export {loggerRouter};