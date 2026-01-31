const express =require("express");
const superbase=require ("superbase");
const router=express.Router();
router.post("./signup",async(req,res)=>{
    const {name,email,password,role}=req.body;
    if(!["customer","owner","driver" ].includes(role)){
        return res.status(400).json({msg:"invalid role"});
    }
    const {data,error }=await superbase.from("users").insert([{name,password,role}]);
    if(error)return res.status(400).json(error);
    res.json (data);

});
module.exports=router;