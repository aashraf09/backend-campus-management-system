import mongoose from "mongoose";

const teacherSchema = mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        userName: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true,
        },
        category: {
            type: Number,
            default: 510
        },
        applications: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Application'
            }
        ]
    },
    {
        Timestamp: true
    }
)