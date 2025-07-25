const mongoose = require('mongoose');

const userVerificationSchema = new mongoose.Schema({
    userId:{
        type:String,
  
    },
    uniqueString:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        required:true
    },
    expiresAt:{
        type:Date,
        required:true
    }
})

const userVerificationModel = new mongoose.model('userVerification',userVerificationSchema);

module.exports = userVerificationModel;