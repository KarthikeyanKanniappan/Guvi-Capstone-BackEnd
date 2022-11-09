import express from "express";
const router = express.Router();
import connection from "../models/connection.js";
const client = await connection();

// get employee
router.get("/employees", async (req, res) => {
  try {
    let resUser = await client
      .db("planner")
      .collection("employee")
      .find()
      .toArray();
    res.json(resUser);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;
