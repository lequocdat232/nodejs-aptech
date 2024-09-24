import express from "express";
var router = express.Router();
import {
  findAllController,
  findOneController,
  createRecodeController,
} from "../controllers/students.controller.js";

/* GET users listing. */
router.get("", findAllController);
router.get("/:id", findOneController);
router.post("", createRecodeController);

export default router;
