const resgcont=require('../controller/pgms_registration')
const add_building=require('../controller/pgms_addBuilding')
const getBuildings=require('../controller/pgms_fetch_building');
const getDetails=require("../controller/pgms_details");
const updateData=require('../controller/pgms_update')
const deletedata=require('../controller/pgms_delete');
const express = require('express');
const routes = express.Router();

routes.post('/AddDetails',resgcont.registration);
routes.post('/AddBuilding',add_building.AddBuilding);
routes.get('/getBuildings',getBuildings.getBuilding);
routes.get('/getDetails',getDetails.GetDetails);
routes.post('/update',updateData.updateData);
routes.post('/delete',deletedata.deleteData)
module.exports=routes;



