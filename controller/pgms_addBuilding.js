const buildingModel=require('../models/pgms_buildings.model')

module.exports={
    AddBuilding:(req,res)=>{
        console.log(req.body,"body===")
        let reg=new buildingModel({
            building_num:req.body.building_num,
            
           
        });
        reg.save().then(result=>{
            res.json({'success':true,result:result})
        }).catch(err=>{
            res.json({'success':false,result:err})
        })
    }
}
