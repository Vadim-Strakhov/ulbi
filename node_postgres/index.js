const express = require("express");
const userRouter = require("./routes/user.routes.js");
const postRouter = require("./routes/post.routes.js");

const PORT = process.env.PORT || 8080;

const app = express();

// app.get("/", (req, res) => {
//   res.send("HELLO POSTGRES + NODEJS!");
// });
app.use(express.json());
app.use("/api", userRouter);
app.use("/api", postRouter);

app.listen(PORT, () => console.log(`server started in port ${PORT}`));
