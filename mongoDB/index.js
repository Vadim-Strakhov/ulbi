const { MongoClient } = require("mongodb");

const client = new MongoClient(
  "mongodb+srv://user:user@cluster0.vjvwxch.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

const start = async () => {
  try {
    await client.connect();
    console.log("Соединение установлено");
    await client.db().createCollection("users");
    const users = client.db().collection("users");
    await users.insertOne({ name: "ulbi tv", age: 24 });
    const user = await users.findOne({ name: "ulbi tv" });
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};

start();
