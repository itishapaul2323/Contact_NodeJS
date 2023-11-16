const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter the userName"],
    },
    email: {
        type: String,
        required: [true, "Please enter the user email addresss"],
        unique: [true, "Email address already taken"],
    },
    password: {
        type: String,
        required: [true, "Please enter the password"],
    },
},
{
    timestamps: true,
});

module.exports = mongoose.model("User", userSchema);