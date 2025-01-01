import express from "express";
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = "mongodb://127.0.0.1:27017?retryWrites=true&w=majority";

const app = express();

const client = new MongoClient(uri, {
  serverApi: ServerApiVersion.v1,
});

const startServer = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

startServer();

const database = client.db("Connected");
const usersCollection = database.collection("users");
const postsCollection = database.collection("posts");

app.use(express.json());

app.post("/M00975827/users", async (req, res) => {
  try {
    const user = req.body;
    const result = await usersCollection.insertOne(user);
    res.json(result);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/M00975827/post", async (req, res) => {
  try {
    const post = req.body;
    const result = await postsCollection.insertOne(post);
    res.json(result);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/M00975827/getusers", async (req, res) => {
  try {
    const users = await usersCollection.find().toArray();
    res.json(users);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/M00975827/getpost", async (req, res) => {
  try {
    const posts = await postsCollection.find().toArray();
    res.json(posts);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = 9999;
app.listen(PORT,() => {
    console.log(`server is running on port ${PORT}`);
    console.log('hello world;');
});

app.use("/M00975827/", express.static('Public'));

