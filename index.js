const express = require("express");
const { rootRouters } = require("./routers/root.Routers");
const app = express();

// set up app sử dụng data JSON
app.use(express.json());

app.use("/api", rootRouters);
/**
 * method: get
 * url: "/" <==> http://localhost:8000/
 *
 */
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = 8000;
app.listen(port, () => {
  console.log(`app run port ${port}`);
});
