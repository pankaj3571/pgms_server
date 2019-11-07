const registrationModel=require('../models/pgms_registration.model')

module.exports={
    updateData:async(req,res)=>{
        try{
console.log(req.body._id,"hjvcghsdcgdshcdsc")
            var update_data={$set:
                {
            name:req.body.name,
            address:req.body.address,
            pan:req.body.pan,
            aadhar:req.body.aadhar,
            building_num:req.body.building_num,
            room_num:req.body.room_num,
                }}
        console.log("body",req.body)
        await registrationModel.updateOne({id:req.body._id},update_data,{new:true,upsert: true, setDefaultsOnInsert: true}).then(result=>{
            
            if(!result){
                res.json({status:"false",data:result})
            }
            else{
                console.log(result,"result")
                res.json({status:"success",data:result})
            }
        })
           
      
    }catch(err){
console.log(err,"error")
    }
     
    }
    
}
