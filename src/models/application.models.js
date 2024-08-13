import mongoose from "mongoose";

const applicationSchema = mongoose.Schema(
    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student' || 'Teacher',
            required: true
        },
        subject: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        status: {
            type: String,
            default: 'pending',
            enum: ['pending', 'approved', 'rejected']
        },

    },
    {
        Timestamp: true
    }
)

export const Application = mongoose.model('Application', applicationSchema)