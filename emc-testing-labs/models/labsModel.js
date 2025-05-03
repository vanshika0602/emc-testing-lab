const mongoose = require('mongoose');

const labSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    company_name: {
        type: String,
        required: [true, "Title is required"],
        trim: true,
    },
    verified: {
        type: Boolean,
        default: false,
    },
    logo: {
        type: String
    },
    accreditation: {
        type: String,
        required: [true, "Accreditation required"],
        trim: true,
    },
    contact: {
        type: Number,
        required: [true, "Contact required"],
        trim: true,
    },
    location: {
        type: String,
        required: [true, "Location required"],
    },
    expertise: {
        type: String,
        required: [true, "Expertise required"],
    },
    industries: {
        type: [String],
        required: [true, "Industries required"],
    },
    testingServices: {
        type: [String],
        required: [true, "Testing Services required"],
    },
    description: {
        type: String,
        required: [true, "Description required"],
    },
    profile_menu: {
        type: mongoose.Schema.Types.Mixed,
        required: [true, "Profile Menu required"],
    }
}, {
    timestamps: true
});

// ✅ Add this AFTER schema definition
labSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        ret.id = ret._id;
        return ret;
    }
});

module.exports = mongoose.model('Lab', labSchema);
