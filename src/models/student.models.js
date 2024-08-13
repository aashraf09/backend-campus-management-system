import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            unique: true,
            required: true,
            lowercase: true
        },
        fullName: {
            type: String,
            required: true
        },
        familyName: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        category: {
            type: Number,
            default: 509,
        },
        address: {
            type: String,
            required: true
        },
        date_of_birth: {
            type: String,
            required: ture
        },
        gender: {
            type: String,
            required: true
        },
        enrollment: {
            joiningDate: {
                type: String,
                required: true
            },
            className: {
                type: Number,
                required: true
            },
            section: {
                type: String,
                required: true
            },
            rollNumber: {
                type: String,
                required: true
            }
        },
        applications: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Application'
            }
        ],
        fee: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Fee'
            }
        ]
    },
    {
        timestamps: true
    }
)

export const Student = mongoose.model('Student', studentSchema)