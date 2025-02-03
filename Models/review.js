import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now()
    },
    isApproved: {
        type: Boolean,
        required: true,
        default: false
    },
    profilePicture :{
        type: String,
        required: true,
        default : "https://media.licdn.com/dms/image/v2/D5603AQEhBYaldyR_rg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1712338616576?e=2147483647&v=beta&t=bziv00oSahHbPawEkrwZwMN3C2ReWGTKRTRhBkro66k"
    }
})

const Review = mongoose.model("Review", reviewSchema)

export default Review;