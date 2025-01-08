//database schema
// schema means how we are going to save the details of the user 
// user generally has a first name, last name, email and password 

const mongoose = require('mongoose')
const CryptoJS = require('crypto-js')

const UserSchema = new mongoose.Schema({
    // [property]:[type:datatype]  --> string boolean number required true false
    
    firstName:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    roleType:{
        type:String,
        required:true
    }
})

UserSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        return next()
    }
    // encrypts password
    this.password=CryptoJS.SHA512(this.password).toString();
    next();
});

UserSchema.method.matchPassword = async function(enteredPassword) {
    const hashPassword=CryptoJS.SHA512(enteredPassword).toString();

    return hashedPassword===this.password;
}


module.exports = mongoose.model('User', UserSchema)