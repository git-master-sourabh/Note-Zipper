import express from "express";
import {
  getNoteById,
  getNotes,
  CreateNote,
  DeleteNote,
  UpdateNote,
} from "../controllers/noteController.js";
const router = express.Router();
import { protect } from "../middleware/authMiddleware.js";

router.route("/").get(protect, getNotes);   //route for reading the notes
router
  .route("/:id")
  .get(getNoteById)
  .delete(protect, DeleteNote)
  .put(protect, UpdateNote);
router.route("/create").post(protect, CreateNote); //route for creating the notes

export default router;
