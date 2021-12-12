require('dotenv').config();
import {Router} from 'express';//importar el objetos router
import  {createOrder, captureOrder, cancelOrder} from '../controllers/payment.controller';

const router = Router();

//        (ruta,             ejecutar)
router.post("/create-order",createOrder);

router.get("/capture-order",captureOrder);

router.get("/cancel-order",cancelOrder);

export default router;