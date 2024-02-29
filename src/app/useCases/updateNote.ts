import { Next } from "koa";
import { CustomContext } from "../utils/CustomContext";
import { notes } from "../models/Notes";

export async function updateNote(ctx: CustomContext, next: Next) {
  const routerParam = ctx.params.id;
  const requestBody = ctx.request.body || {};

  if (!routerParam) {
    ctx.status = 400;
    ctx.body = { error: "Missing ID parameter in the route" };
    return;
  }

  const index = notes.findIndex((el) => el.id === parseInt(routerParam, 10));

  if (index !== -1) {
    const updatedNote = { ...notes[index], ...requestBody };
    notes[index] = updatedNote;
    ctx.body = {
      response: updatedNote,
      message: "A Notes is updated successfully",
    };
    return;
  }

  ctx.status = 404;
  ctx.body = { error: "Note not found" };

  await next();
}