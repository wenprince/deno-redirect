import { serve } from "https://deno.land/std/http/mod.ts";

async function reqHandler(req: Request) {
  const reqPath = new URL(req.url).pathname;
  return Response.redirect("https://princewen.work" + reqPath, 301);
}

serve(reqHandler, { port: 8000 });
