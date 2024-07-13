const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoose = require("mongoose")

const uri = "mongodb+srv://amoghuddar23:jVwEYMfiZ66i3sXl@dash.pxnuuex.mongodb.net/?retryWrites=true&w=majority&appName=DASH";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

async function connectToDB() {
  // try {
  //   await client.connect();
  //   console.log("Connected to MongoDB");
  // } catch (err) {
  //   console.error("Failed to connect to MongoDB", err);
  // }
  return mongoose.connect(uri)
}

module.exports = connectToDB;


