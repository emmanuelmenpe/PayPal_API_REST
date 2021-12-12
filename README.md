# PayPal API REST
Pequeña API REST de PayPal que permite crear, capturar y cancelar una compra/pago
mediante el uso de la API Sandbox de PayPal

## Instalar dependencias
Tiener instalado node JS, entrar al projecto desde consola y ejecutar el comando npm install

## Configuración API
Crear una cuenta de [SandBox](https://developer.paypal.com/developer/accounts), despues crear una  [app](https://developer.paypal.com/developer/applications) para obtener las credenciales(**Clien ID** y **Secret**).
- Sustituir process.env.API por la [ruta](https://developer.paypal.com/docs/api/orders/v2/) Sandbox.
- Sustituir process.env.CLIENTID por el **Client ID**.
- Sustituir process.env.SECRET por el **Secret**.
- Sustutir process.env.PUERTO por el puerto que usa para desarrollo.

### npm run dev
Al ejecutar npm run dev podra iniciar el servidor, entrar a la ruta http://localhost:puerto y presionar el botón que se comunicará con el API para genera una simulación

### Link del video tutorial
- https://www.youtube.com/watch?v=sBenKZqEzpQ&t=163s