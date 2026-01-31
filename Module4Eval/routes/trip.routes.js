eexpress=require("express")
const superbase=require("./.config/superbase");
router.post("/create",async(req ,req)=>{
    const{vehicle_id,passengers}=req.body;

const{data:vehicle}=await superabse .from ("vehicles").select("*") .eq("id",vehicle_id).single();
if(!vehicle.isAvaible){
            return res.status(400).json({msg:"vehicle not available"});

}
if(passengers>vehicle.allowed_passengers)
{
        return res.status(400).json({msg:"Passenger limit exceed" });

}
await superbase.from("vehicles").update({isAvauble:false}).eq("id,vehicle_id")
const {data,error} = await superbase.from ("trips").insert([req.body]);
if (error) return re.ststus(400).json(error);
res.json(data);
});