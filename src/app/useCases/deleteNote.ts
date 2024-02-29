import { Next } from "koa";

import { CustomContext } from "../utils/CustomContext";
import { notes } from "../models/Notes";

export async function deleteNote(ctx: CustomContext, next: Next) {
  const routerParam = ctx.params.id;

  if (!routerParam) {
    ctx.status = 400;
    ctx.body = { error: "ID parameter is missing" };
    return;
  }

  const index = notes.findIndex((el) => el.id === parseInt(routerParam, 10));

  if (index !== -1) {
    const deletedProduct = notes.splice(index, 1)[0];
    ctx.status = 204;
    ctx.body = {
      response: deletedProduct,
      message: "Notes deleted successfully",
    };
    return;
  }

  ctx.status = 404;
  ctx.body = {
    error: "Note not found",
  };

  await next();
}