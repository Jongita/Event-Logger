import express, { Application } from 'express';
import { loggerRouter } from './routes/logger.router';

const app:Application=express();

// app.use(express.urlencoded());

// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send("Hello World")
// })

app.use('/logger', loggerRouter);


export {app};