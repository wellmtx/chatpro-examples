const express = require("express");

const app = express();

app.use(express.json());

app.post("/webhook", (request, response) => {
  response.send();

  console.log(request.body);

  // Create your logic here
});

app.listen(3000, () => console.log("Server is running on port 3000"));
