require("dotenv").config();
const express =require("express")
const userRoutes=require("./routes/user.routes");
const vehicleRoutes=require("./routes/vehicle.routes");
const tripRoutes=require("./routes/trip.routes");
const analyticsRoutes=require("./routes/nalytics.routes");
const logger =require("./middlewares/logger.middleware")
const notFound=require("./middlewares/notFound.middleware")


const app=express();
app.use(express.json());
app.use(logger);
app.use("./users",userRoutes);
app.use("./vehicles",vehicleRoutes);
app.use("./trips",tripRoutes);
app.use("./analytics",analyticsRoutes);
app.use (notFound);
app.listen(process.env.port,()=>{console.log('server running on port ',process.env.PORT);


});








