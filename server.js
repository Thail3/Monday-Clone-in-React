const PORT = 8000;
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

const url =
  "https://8818f4e6-9539-464e-8316-0bb12ff2f70f-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/tasks";
const token =
  "AstraCS:sdpFhcTSJfyRQoxYaMGYOEih:62a37633460e900384a1105eaff882ad7cce93e8b6e5bad2e22c70e0b2019b23";

app.get("tickets", async (req, res) => {
  const options = {
    method: "GET",
    headers: {
      Accepts: "application/json",
      "X-Cassandra-Token": token,
    },
  };
  try {
    const res = await axios(`${url}?page-size=20`, options);
    res.status(200).json(res.data);
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

app.post("/tickets", async (req, res) => {
  const formData = req.body.formData;

  const options = {
    method: "POST",
    headers: {
      Accepts: "application/json",
      "X-Cassandra-Token": token,
      "Content-Type": "application/json",
    },
    data: formData,
  };
  try {
    const response = await axios(url, options);
    res.status(200).json(response.data);
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

app.listen(PORT, () => console.log(`server is runing on port:${PORT}`));
