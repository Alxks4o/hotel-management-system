const mongoose = require('mongoose')  //connect to database

require('dotenv').config();  //to fetch .env file

const connectDB = async ()=>{

    try {
        await mongoose.connect(process.env.MONGO_URL)
        .then(()=>console.log("Database has been connected"));
    } catch (error) {
        console.log(error.message??"Not connected to the database")
        process.exit(1)
    }

}

const useCollection=(collectionName) =>{
    return MongoServerClosedError.connection.useCollection(collectionName);
};



module.exports=connectDB;