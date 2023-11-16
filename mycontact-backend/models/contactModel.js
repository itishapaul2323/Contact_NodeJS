const mongoose = require('mongoose');

const contactScheme = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name : {
        type : String,
        require: [true, "Please add the contact name"],   
    },
    email: {
        type: String,
        require: [true, "Please add the contact email"], 
    },
    contact: {
        type: String,
        require: [true, "Please add the contact number"], 
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Contact", contactScheme);
