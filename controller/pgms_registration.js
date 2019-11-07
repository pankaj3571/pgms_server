const registrationModel=require('../models/pgms_registration.model')

module.exports={
    registration:(req,res)=>{
        console.log(req.body,"body===")
        let reg=new registrationModel({
            id:req.body.id,
            name:req.body.name,
            address:req.body.address,
            pan:req.body.pan,
            aadhar:req.body.aadhar,
            building_num:req.body.building_num,
            room_num:req.body.room_num,
           
        });
        reg.save().then(result=>{
            res.json({'success':true,result:result})
        }).catch(err=>{
            res.json({'success':false,result:err})
        })
    }
}
