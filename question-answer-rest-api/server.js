const express = require("express");
const dotenv = require("dotenv");
const connectDatabase = require("./helpers/database/connectDatabase");
const routers = require("./routers"); // index.js'i dahil ediyo default olarka o yüzden yazmadık ilerisine
const customErrorHandler = require("./middlewares/errors/customErrorHandler");
const path = require("path");//express içinde var yollarla alakalı
const cors = require('cors');

//Environment Variables
dotenv.config({
    path : "./config/env/config.env"
});
// MongoDb Connection
connectDatabase();

//localhost:5000/api/questions
//localhost:5000/api/auth

const app = express();

const corsOptions = {
    origin : ["http://localhost:3000"],
}

//Express - Body Middleware
app.use(express.json());

//Cors yapılandırması
app.use(cors(corsOptions))

const PORT = process.env.PORT;

// Routers Middleware

app.use("/api",routers);


//Error Handler
app.use(customErrorHandler);

//Static Files
app.use(express.static(path.join(__dirname,"public")));

app.listen(PORT, () => {
    console.log(`App started on ${PORT} : ${process.env.NODE_ENV}`);
});
