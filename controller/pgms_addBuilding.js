const buildingModel=require('../models/pgms_buildings.model')

module.exports={
    AddBuilding:(req,res)=>{
        console.log(req.body,"body===")
        let reg=new buildingModel({
            building_num:req.body.building_num,
            
           
        });
        buildingModel.findOne( {building_num:req.body.building_num}).select('building_num').lean().then(data1=>{
           if(data1){
            console.log("data already there",data1)
            res.json({message:"building number already exists please choose another"})
           }else{
            reg.save().then(result=>{
                console.log(result,"result====")
                res.json({'success':true,result:result})
            }).catch(err=>{
                res.json({'success':false,result:err})
            })
           }
        })
        
      
      
    }
}
