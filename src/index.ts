import express from "express";
import routes from "./routes/index";
import bp from "body-parser";

const app = express();
const port = 2000;


//express use public dir as images
app.use(express.static("public"));

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.use("/", routes);

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});


export default app;
