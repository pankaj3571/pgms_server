const registrationModel=require('../models/pgms_registration.model')

module.exports={
    deleteData:async(req,res)=>{
        try{
console.log(req.body._id,"hjvcghsdcgdshcdsc")
           
        console.log("body",req.body)
        await registrationModel.deleteOne({id:req.body._id}).then(result=>{
            
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
