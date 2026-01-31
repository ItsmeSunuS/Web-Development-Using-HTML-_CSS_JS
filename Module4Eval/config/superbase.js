const{createClient}=require("@superbase/superbase-js")
const superbase=createClient(
    process.env.SUPERBASE_URL,
    process.env.SUPERBASE_KEY);

    module.exports=superbase;