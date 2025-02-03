import Student from "../Models/student.js"

export function getUsers(req, res){
    Student.find().then(
        (result)=>{
            res.json(result)
        }
    )
}

export function postUsers(req, res){
    let studentData = req.body

    let student = new Student(studentData)

    student.save().then(()=>{
        res.json({
            message: "Student saved "
        })
    }).catch(()=>{
        message: "Student saved failed"
    })
}