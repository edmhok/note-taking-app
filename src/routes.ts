import Router from "koa-router";

import { listNotes } from "./app/useCases/listNotes";
import { listNotesById } from "./app/useCases/listNotesById";
import { createNote } from "./app/useCases/createNote";
import { updateNote } from "./app/useCases/updateNote";
import { deleteNote } from "./app/useCases/deleteNote";

export const router = new Router();

router.get("/note", listNotes);
router.get("/note/:id", listNotesById);
router.post("/note", createNote);
router.put("/note/:id", updateNote);
router.delete("/note/:id", deleteNote);