import User from "../Models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export function registerUser(req, res){
    const data = req.body;

    data.password = bcrypt.hashSync(data.password,10);

    const newUser = new User(data);

    newUser.save().then(()=>{
        res.json({
            message: "User registered successfully"
        })
    }).catch((error )=>{
        res.status(500).json({
            message: "Something went wrong"
        })
    })
}

export function loginUser(req, res){
    const data = req.body;

    User.findOne({
        email : data.email
    }).then(
        (user)=>{
            if(user==null){
                res.status(404).json({
                    error:"User not found"
                });
            }else{

                const isPasswordCorrect = bcrypt.compareSync(data.password, user.password);

                if(isPasswordCorrect){
                    const token = jwt.sign({
                        firstName : user.firstName,
                        lastName : user.lastName,
                        email : user.email,
                        role : user.role,
                    }, "kvaudio8")
                    res.json({
                        message: "Login successfull",
                        token : token
                    })
                }else{
                    res.status(404).json({
                        message: "Password wrong"
                    })
                }
            }
        }
    )
}