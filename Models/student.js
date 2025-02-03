import mongoose from "mongoose"

let studentSchema = mongoose.Schema({
        name : String,
        age : Number,
        height : Number
    })

let Student = mongoose.model("students", studentSchema)

export default Student