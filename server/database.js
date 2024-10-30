require("dotenv").config();
const {MongoClient, ServerApiVersion} = require("mongodb");

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/";

const options ={
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
        }
};

let client;
const connectToMongoDB = async () => {
    if(!client){
        try {
            client = await MongoClient.connect(uri, options);
            console.log("Connected to MongoDB");
        } catch (error) {
            console.log(error);
        }
    }
    return client;
    // it is a good practiceto use the same client if its already connected except creating a new one every single time
}
const getConnectedClient = () => client;

module.exports = { connectToMongoDB, getConnectedClient};