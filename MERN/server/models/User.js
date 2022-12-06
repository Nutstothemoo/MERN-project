import mongoose from "mongoose"

const UserSchema = new mongoose.Schema(
    {
        firstName:{
            type:String,
            require: true,
            min:2,
            max:45
        },
        lastName:{
            type:String,
            require: true,
            min:2,
            max:50
        },
        email:{
            type:String,
            required: true,
            min:2,
            max:50,
            unique: true
        },
        password:{
            type:String,
            required: true,
            min:5,
        },
        friends: {
            type:Array,
            default:[]
        },
        picturePath:{
            type:String,
            default:""
        },
        location: String,
        occupation:String,
        viewedProfile: Number,
        impressions: Number,  
        }, {timestamps:true}
);

const User = mongoose.model("User", UserSchema)

export default User;