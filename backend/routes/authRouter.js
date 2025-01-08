//holds all the paths you require

const express = require('express'); //to use router
const User = require('../models/users');
const jwt = process.env.SECRETE_JWT

const router = express.Router(); //helps to navigate using the paths

router.post('/register', async (req, res)=>{
    // req --> data
    // res --> response you send back
    // register --> check if email is already registered or not
    const {firstname,lastname,email,password,roleType} = req.body;

    try {
        let user = await User.findOne({email})
        if(user){
            return res.status(400).json({message:'User already exists'})
        }
        newUser = new User({
            firstname,
            lastname,
            email,
            password,
            roleType
        });

        await newUser.save();


        res.status(200).json({message:"User has been registered successfully!"})
    } catch (error) {
        console.error(err.message??'Something went wrong')
        res.status(500).json({message:"Server error"})
    }
    // if there is no user with this email 
})

router.post('/login', async(req,res) => {
    const {email,password} = req.body;
 
    try {
        const user = await User.findOne({email});
        if (!user) {
            console.log('User not found');
            return res.status(400).json({message: 'Invalid credentials'});
        }
 
        const isMatch = user.matchPassword(password);
 
        if (!isMatch) {
            console.log('Password does not match');
            return res.status(400).json({message: 'Invalid Credentials'});
        }
        
        const payload={
            user:{
                id:user._id
            }
        }

        const token = jwt.substring(payload,process.env.JWT_SECRETE,{expiresIn:'1h'})
        
        return res.status(200).json({message:"Login successful",token:token})
        
    } catch (error) {
        console.error('Server Error:', error.message);
        res.status(500).json({message: 'Server Error'})
    }
});                
