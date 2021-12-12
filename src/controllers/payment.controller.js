require('dotenv').config();
import axios from 'axios';

const ruta = process.env.API;
const usuario = process.env.CLIENTID;
const passw = process.env.SECRET;
const puerto = process.env.PUERTO;

export  const createOrder = async(req,res) =>{
    try { 

        const order= {
            intent:'CAPTURE',
            purchase_units:[//array de unidad de compra
                {
                    amount:{//establece total, impuestos, descuentos, ...
                        currency_code:"MXN",
                        value: '600'
                    },
                    description:"Mouse gamer",
                }
            ],
            application_context:{//descripcion de la compañia/negocio
                brand_name:"mitienda.com",
                landing_page:"LOGIN",
                user_action:"PAY_NOW",
                return_url:`http://localhost:${puerto}/capture-order`,
                cancel_url:`http://localhost:${puerto}/cancel-order`
            }
        }

        // format the body
        const params = new URLSearchParams();
        params.append("grant_type","client_credentials")

        //response.data.access_token = {data}
        // Generate an access token
        const {data:{access_token}} = await axios.post(`${ruta}/v1/oauth2/token`,params,{
            headers:{
                "Content-Type": "application/x-www-form-urlencoded",
            }, 
            auth:{
                username:usuario,
                password:passw
            }
        });
        //console.log(data);
        
        // make a request
        //peticion post, se manda la ruta, orden y un auth 
        const response = await axios.post(`${ruta}/v2/checkout/orders`, order, {
            /*auth:{
                username:usuario,
                password:passw
            }*/
            headers:{
                Authorization:`Bearer ${access_token}`
            }
        });

        console.log(response.data);
        return res.json(response.data);
    } catch (error) {
        console.log(error);
        return res.status(500).send("halgo anda mal");
    }
};

export  const captureOrder = async(req,res) =>{
    try {
        const {token, PayerID} = req.query;

        const response = await axios.post(
        `${ruta}/v2/checkout/orders/${token}/capture`,
        {},
        {
            auth: {
            username: usuario,
            password: passw,
            },
        }
        );

        console.log(response.data);

        res.redirect("/payed.html");
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server error" });
    }
};

export  const cancelOrder = (req,res) =>{
    res.redirect('/');
};