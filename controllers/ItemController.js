
const Card = require("../models/cards");
const lodash = require("lodash");



const getReq = (model)=>{
    return async(req,res)=>{
    const {category,title,totalMoney} = req.query;
    const query = {};
    if(category){query.category= lodash.lowerCase(category)};
    if(title){ query.title = lodash.lowerCase(title)};
    if(totalMoney){query.totalMoney = totalMoney};
    try{
        const cards = await model.find(query);
        
       return res.status(200).json(cards);
    }catch(err){
        console.log(err);
        res.status(400).json({error: err.message});
    }
    }

};

const postReq = (model)=>{
    return async(req,res)=>{
    const {category,title,totalMoney,imgSrc,sahm1,sahm2,sahm3} = req.body;
    const query = {};
    if(category){query.category= lodash.lowerCase(category)};
    if(title){ query.title = lodash.lowerCase(title)};
    if(imgSrc){ query.imgSrc = lodash.lowerCase(imgSrc)};
    if(sahm1){ query.sahm1 = lodash.lowerCase(sahm1)};
    if(sahm2){ query.sahm2 = lodash.lowerCase(sahm2)};
    if(sahm3){ query.sahm3 = lodash.lowerCase(sahm3)};
    if(totalMoney){query.totalMoney= totalMoney};
    try{
        const card = new model(query);
        const createdCard =  await card.save();
        return res.status(200).json(createdCard);
    }catch(err){
        console.log(err);
        return res.status(400).json({error:err.message});
    }
};
} 


const patchReq = (model)=>{
    return async(req,res)=>{
    const { _id, category,title,totalMoney,imgSrc,sahm1,sahm2,sahm3} = req.body;
    if(!_id){
        throw Error("Enter The Item Id");
    }
    const query = {};
    if(category){query.category= lodash.lowerCase(category)};
    if(title){ query.title = lodash.lowerCase(title)};
    if(imgSrc){ query.imgSrc = lodash.lowerCase(imgSrc)};
    if(sahm1){ query.sahm1 = lodash.lowerCase(sahm1)};
    if(sahm2){ query.sahm2 = lodash.lowerCase(sahm2)};
    if(sahm3){ query.sahm3 = lodash.lowerCase(sahm3)};
    if(totalMoney){query.totalMoney= totalMoney};
    try{
        const updatedItem = await model.findByIdAndUpdate(
            _id,
            query,
            {new: true}
        );
        if(!updatedItem){
            return res.status(404).json({error:"Item Not Found"})
        }
        res.status(200).json(updatedItem);
    }catch(err){
        console.log("Error Updating Item",err);
        res.status(400).json({error:err.message});
    }
};}
 
const deleteReq =   (model)=>{
    return async(req,res)=>{
    const {_id} = req.body;
    try{
        const deletedItem = await Card.findByIdAndDelete(_id);
        return res.status(200).json(deletedItem);
    }catch(err){
        console.log(err);
        return res.status(400).json({error:err.message});
    }
};}

module.exports = {getReq,postReq,patchReq,deleteReq};