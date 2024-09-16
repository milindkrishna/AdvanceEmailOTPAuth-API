import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        trim: true,
        maxLength: [120, 'email cannot exceed 120 characters'],
        unique: true
    },
    password: {
        type: String,
        required: true,
        maxLength: [120, 'Password cannot exceed 20 characters']
    },
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: [120, 'Username cannot exceed 120 characters']
    },
    lastLogin: {
        type: Date,
        default: Date.now
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    resetPasswordToken: String,
	resetPasswordExpiresAt: Date,
	verificationToken: String,
	verificationTokenExpiresAt: Date,
}, { timestamps: true });

export const User = mongoose.model('User', userSchema)