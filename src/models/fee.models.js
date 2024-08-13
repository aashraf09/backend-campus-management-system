import mongoose from "mongoose";

const feeSchema = mongoose.Schema(
    {
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student',
            required: true
        },
        fee: {
            type: Number,
            required: true
        },
        months: {
            January: {
                type: Boolean,
                default: false
            },
            February: {
                type: Boolean,
                default: false
            },
            March: {
                type: Boolean,
                default: false
            },
            April: {
                type: Boolean,
                default: false
            },
            May: {
                type: Boolean,
                default: false
            },
            June: {
                type: Boolean,
                default: false
            },
            July: {
                type: Boolean,
                default: false
            },
            August: {
                type: Boolean,
                default: false
            },
            September: {
                type: Boolean,
                default: false
            },
            October: {
                type: Boolean,
                default: false
            },
            November: {
                type: Boolean,
                default: false
            },
            December: {
                type: Boolean,
                default: false
            },
        },
    },
    {
        Timestamp: true
    }
)

const Fee = mongoose.model('Fee', feeSchema)