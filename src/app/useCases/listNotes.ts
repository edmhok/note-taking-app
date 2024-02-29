import { notes } from "../models/Notes";

export async function listNotes(ctx: any, next: any) {
  ctx.body = { response: notes };
  await next();
}