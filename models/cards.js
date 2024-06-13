const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    no:{
        type:Number,
        required:false,
    },
    category:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    totalMoney:{
        type:Number,
        required:true
    },
    imgSrc:{
        type:String,
        required:true
    },
    sahm1:{
        type:String,
        required:true
    },
    sahm2:{
        type:String,
        required:true
    },
    sahm3:{
        type:String,
        required:true
    }
});

const Card = mongoose.model("Card",Schema);
module.exports = Card;
