import express, { Application } from 'express';
import { loggerRouter } from './routes/logger.router';
import { corsHeaders } from './middlewares/cors.middleware';

const app:Application=express();

app.use(express.urlencoded());

app.use(express.json());

app.use(corsHeaders);

// app.get('/', (req, res) => {
//     res.send("Hello World")
// })

app.use('/logger', loggerRouter);


export {app};