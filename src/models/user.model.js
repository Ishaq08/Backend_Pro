import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
         email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
          fulname: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
         avatar: {
            type: String, // cloudinary url
            required: true,
        },
        coverImage: {
            type: String, // cloudinary url
            
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,
            required :[ true, " Passsword is Required"]
        },
        refreshToken: {
            type: String
        }
    },{timestamps: true}
)

// pre is the mongoose middleware 
// when the data is going to saving just after use pre 

userSchema.pre("save", async function (next) {
    if (!this.isModified("Password")) return next();
    this.password = bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password) {
   return await  bcrypt.compare(password, this.password)
   
}
export const User = mongoose.model("User", userSchema)