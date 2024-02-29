import { Context, Next } from "koa";
import { notes } from "../models/Notes";

export async function createNote(ctx: Context, next: Next) {
  const requestBody = ctx.request.body;

  if (!requestBody) {
    ctx.status = 400;
    ctx.body = { error: "Note is required" };
    return;
  }

  notes.push(requestBody);

  ctx.status = 201;
  ctx.body = { response: requestBody, message: "A note is created successfully" };

  await next();
}