const buildingModel=require('../models/pgms_buildings.model')

module.exports={
    getBuilding:(req,res)=>{
        console.log(req.body,"body===")
     let data= buildingModel.find();
     data.then(data1=>{
        res.json({'success':true,result:data1})
         console.log(data1)
     }).catch(err=>{
            res.json({'success':false,result:err})
        })
    
     
        // reg.save().then(result=>{
        //     res.json({'success':true,result:result})
        // }).catch(err=>{
        //     res.json({'success':false,result:err})
        // })
    }
}
