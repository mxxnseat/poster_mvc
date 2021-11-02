import mongoose from "mongoose";

function connect(){
    return mongoose.connect(process.env.MONGODB as string)
        .then(()=>{
            console.log("succes connect to mongo");
        })
        .catch((e:unknown)=>{
            console.log(`Error with connection to mongo\nError: ${e}`);
            Promise.reject();
        })
}

export default connect;