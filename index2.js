import express from "express"
import bodyParser from "body-parser";
import mongoose from "mongoose";
import Student from "./Models/student.js";
import studentRouter from "./Routes/route.js";
import userRouter from "./Routes/userRoute.js";
import productRouter from "./Routes/productRouter.js"
import jwt from "jsonwebtoken"

let app = express();

app.use(bodyParser.json());

app.use((req, res, next)=>{
    let token = req.header("Authorization")

    if(token!=null){
        token = token.replace("Bearer ", "")

        jwt.verify(token, "kvaudio8",
            (err, decoded)=>{
                if(!err){
                    req.user = decoded;
                }
            }
        )
    }
    next()
})

let mongourl = "mongodb+srv://admin:123@cluster0.ruwj8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongourl);

let connection = mongoose.connection
connection.once("open", ()=>{
    console.log("mongoDB connection established");
})

app.use("/api/users", userRouter)
app.use("/api/products", productRouter)

app.listen(3000, ()=>{
    console.log("Server starting");
})