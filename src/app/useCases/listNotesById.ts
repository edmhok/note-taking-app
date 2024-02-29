import { Next } from "koa";

import { CustomContext } from "../utils/CustomContext";
import { notes } from "../models/Notes";

export async function listNotesById(ctx: CustomContext, next: Next) {
  const routerParam = ctx.params.id;

  if (!routerParam) {
    ctx.status = 400;
    ctx.body = { error: "Missing ID parameter in the route" };
    return;
  }

  const foundNotes = notes.find(
    (el) => el.id === parseInt(routerParam, 10)
  );

  if (foundNotes) {
    ctx.body = { response: foundNotes };
    return;
  }

  ctx.status = 404;
  ctx.body = { error: "Note not found" };

  await next();
}