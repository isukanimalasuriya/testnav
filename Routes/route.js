import express from "express"
import { getUsers, postUsers } from "../Controllers/studentcontroller.js"

let studentRouter = express.Router()

studentRouter.get("/", getUsers)

studentRouter.post("/", postUsers)

export default studentRouter