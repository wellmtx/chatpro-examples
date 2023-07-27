const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/webhook", (request, response) => {
  response.send();

  console.log(request.body);

  // Create your logic here
});

app.listen(3000, () => console.log("Server is running on port 3000"));
