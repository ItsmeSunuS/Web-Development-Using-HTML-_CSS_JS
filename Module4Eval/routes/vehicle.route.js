const express=require("express");
const suerbase=require("../config/superbase");
const rateLimiter=require("../middlewares/rateLimiter.middleware");
const superbase = require("../config/superbase");
const router=express.Router();
router.post("/add",rateLimiter,async(req, res)=>{
    const {owner_id}=req.body;

const {data:owner}= await superbase.from("users").select("*").eq("id",owner_id).single();

if(!owner|| owner.role!=="owner"){

const {data,error} = await superbase.from ("vehicles").insert([req.body]);}
if (error) return re.ststus(400).json(error);
res.json(data);
});


