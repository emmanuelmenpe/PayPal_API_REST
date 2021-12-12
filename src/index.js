require('dotenv').config();
import express from 'express';
import morgan from 'morgan';
import paymentsRoutes from './routes/payments_routes';
import path from 'path';

const app = express();
app.use(morgan('dev'));//muestra las peticiones hechas a la API
app.use(paymentsRoutes);
app.use(express.static(path.join(__dirname, "public")));

const puerto = process.env.PUERTO;
app.listen(puerto);
console.log("App escucha en el puerto ", puerto);