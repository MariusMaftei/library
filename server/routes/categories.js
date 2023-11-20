import { Router } from "express";
import Categoty from "../models/Category.js";

const categoryRoute = Router();

categoryRoute.post("/", async (req, res) => {
  const newCat = new Categoty(req.body);
  try {
    const saveCat = await newCat.save();
    res.status(200).json(saveCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

categoryRoute.get("/", async (req, res) => {
  try {
    const cats = await Categoty.find();
    res.status(200).json(cats);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default categoryRoute;
