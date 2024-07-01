import express from "express"
import { dbConnect } from "./db.js"
import cors from "cors"

const app = express()
const port = 3001

app.use(cors())

// app.use(json())
dbConnect()
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err))

app.get("/", async (req, res) => {
  res.send("hi")
})
app.use('/routes/Dossier', dossierRoutes);
app.listen(port, () => {
  console.log(`HTTP server running on port ${port}`)
})
// const express = require("express");
// const { dbConnect } = require("./db.js");
// const cors = require("cors");
// const dossierRoutes = require("./Dossier.js"); // Adjust the path as per your project structure

// const app = express();
// const port = 3001;

// app.use(cors());
// app.use(express.json());
// dbConnect()
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// app.get("/", async (req, res) => {
//   res.send("hi");
// });

// app.use('/routes/Dossier', dossierRoutes);

// app.listen(port, () => {
//   console.log(`HTTP server running on port ${port}`);
// });