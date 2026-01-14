const express = require("express")
const cors = require("cors")
require("dotenv").config();

const port = process.env.PORT || 5000;
const app = express()

app.use(cors())
app.use(express.json())

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_ID}:${process.env.DB_PASS}@cluster0.hvsdcgj.mongodb.net/?appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  const collection = client.db("Project")
  const data = collection.collection("data")

  app.get("/hello", (req, res) => {
    res.send("hello")
  })
}
run().catch(console.dir);


app.listen(port)