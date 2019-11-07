const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const AddBuidling=new Schema({
      
        building_num:Number,
       
})
module.exports=mongoose.model('pgms_building',AddBuidling)