import mongoose from "mongoose"

const conf = ()=>{
    mongoose.connect("mongodb://localhost/userManagement");
    const db = mongoose.connection;
    db.on('error', console.error.bind("unable to connect"))
    db.once("open", function callback(){
        console.log("database connected")
    })
}


export default conf;