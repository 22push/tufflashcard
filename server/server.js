const express = require("express");

const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "https://tufflashcard.vercel.app"
  // origin: "http://localhost:3000"
};

app.use(cors(corsOptions));


app.use(express.json()); 


app.use(express.urlencoded({ extended: true })); 

require('./routes/questionroute')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});