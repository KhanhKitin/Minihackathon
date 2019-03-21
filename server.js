const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const player = require("./model");
const server = express();
const port = 8080;

mongoose.connect("mongodb://localhost:27017/minihackathon", err => {
  if (err) {
    throw err;
  }
  console.log("Connect to MongoDB success");

  server.use(express.static("public"));
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());

  server.get("/", (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname + "/public/index.html"));
  });

  server.post("/", async (req, res) => {
    const names = [];
    // names.push(req.body.player1);
    // names.push(req.body.player2);
    // names.push(req.body.player3);
    // names.push(req.body.player4);
    const player1 = {
      name: req.body.player1
    };
    const result1 = await player.create(player1);
    console.log(result1);
    const player2 = {
      name: req.body.player2
    };
    const result2 = await player.create(player2);
    console.log(result2);
    const player3 = {
      name: req.body.player3
    };
    const result3 = await player.create(player3);
    console.log(result3);
    const player4 = {
      name: req.body.player4
    };
    const result4 = await player.create(player4);
    console.log(result4);

    res.status(201).json({
      id1: result1._id,
      id2: result2._id,
      id3: result3._id,
      id4: result4._id
    });
});


  server.get("/games", (req, res) => {
    res
      .status(200)
      .sendFile(path.resolve(__dirname + "/public/playscreen2.html"));
  });



  server.listen(port, error => {
    if (error) {
      throw error;
    }
    console.log("Server listening on port " + port);
  });
});
