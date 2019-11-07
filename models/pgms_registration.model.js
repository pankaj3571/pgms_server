const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const Registration=new Schema({
        id:{
            type:mongoose.Types.ObjectId
        },
        name:String,
        address:String,
        pan:String,
        aadhar:Number,
        building_num:String,
        room_num:String
})
module.exports=mongoose.model('pgms_details',Registration)