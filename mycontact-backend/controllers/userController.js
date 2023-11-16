const asyncHandler = require('express-async-handler');
const User = require("../models/userModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//@desc Register a User
//@route POST /api/users/register
//@access public

const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;
    if (!username && !email && !password) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable) {
        res.status(400);
        throw new Error("User Already Registered");
    }
    //Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    }); 
    console.log(`User Created ${user}`);
    if(user) {
        res.status(201).json({id : user.id, email: user.email})
    } else {
        res.status(400);
        throw new Error("User Data not valid");
    }

});

//@desc Login a User
//@route POST /api/users/login
//@access public

const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    if (!email && !password) {
        res.status(400);
        throw new Error('All the fields are mandatory')
    }

    var user = await User.findOne({email});
    //compare password with Hash Password
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id,
            },
        }, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "15m"});
        res.status(200).json({accessToken})
    } else {
        res.status(401);
        throw new Error("password is not valid");
    }
});

//@desc Get a User
//@route GET /api/users/current
//@access private

const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user);
});

module.exports = {registerUser, loginUser, currentUser}