import Application from "./framework/Application.js";
import { router } from "./src/user-router.js";
import jsonParser from "./framework/parseJson.js";
import parseUrl from "./framework/parseUrl.js";
import mongoose from "mongoose";

const app = new Application();

const PORT = process.env.PORT || 5001;

app.use(jsonParser);
app.use(parseUrl("http://localhost:5001"));
app.addRouter(router);

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://user:123@cluster0.dnu4via.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
