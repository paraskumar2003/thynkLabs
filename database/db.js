import mongoose from "mongoose";
export const Connection = async (user,password) =>{
    try{
        const URL = `mongodb+srv://${user}:${password}@miiramadhyam.u2ock.mongodb.net/ThynkLabs?retryWrites=true&w=majority`;
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
        console.log("Database Connected Successfully");

    }catch(error){
            console.log("Error while connnecting with database",error.message);
    }
}
export default Connection;