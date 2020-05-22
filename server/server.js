const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/StackHackToDo",
  {
    useNewUrlParser: !0,
    useUnifiedTopology: !0,
    useCreateIndex: 1,
  },
  (err) => {
    if (err) 
        console.log("Error connecting to Mongo");
    else 
        console.log("Mongo connection settled");
  }
);

app.use("/api", require("./routes/API.routes"));

PORT = 3000;
app.listen(PORT, console.log(`Server has started on PORT: ${PORT}`));