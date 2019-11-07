const registrationModel=require('../models/pgms_registration.model')

module.exports={
    GetDetails:async(req,res)=>{
        const details=await registrationModel.aggregate([
            { $lookup:
                {
                  from: 'pgms_buildings',
                  localField: 'id',
                  foreignField: '_id',
                  as: 'data',
                  
                }
                
              },
              {$unwind:'$data'},
         
        ])
        console.log(details,"details")
        if(!details){
            res.json({status:"false",data:details})
        }
        else{
            res.json({status:"success",data:details})
        }
    }
}