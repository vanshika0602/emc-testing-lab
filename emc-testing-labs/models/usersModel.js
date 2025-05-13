const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email:{
        type: String,
        required: [true, "Email is required"],
        trim: true,
        unique: [true, "Email must be unique!"],
        minLength: [5, "Email should have at least 5 characters"],
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, "Password must be provided!"],
        trim: true,
        select: false
    },
},{
    timestamps: true
});

const User = mongoose.model("User", userSchema);
module.exports = User;
