console.log("Hello World!")

/*
const url = Deno.args[0]
const res = await fetch(url)

const body = new Uint8Array(await res.arrayBuffer())
await Deno.stdout.write(body)


import {copy} from "https://deno.land/std@0.165.0/streams/conversion.ts"
const filenames = Deno.args
for(const filename of filenames){
    const file = await DelayNode.open(filename)
    await copy(file, Deno.stdout)
    file.close()
}
import { serve } from "https://deno.land/std@0.157.0/http/server.ts";

const port = 8080;

const handler = async (request: Request): Promise<Response> => {
  const resp = await fetch("https://api.github.com/users/denoland", {
    // The init object here has an headers object containing a
    // header that indicates what type of response we accept.
    // We're not specifying the method field since by default
    // fetch makes a GET request.
    headers: {
      accept: "application/json",
    },
  });
  return new Response(resp.body, {
    status: resp.status,
    headers: {
      "content-type": "application/json",
    },
  });
};

console.log("Listening on http://localhost:8000");
serve(handler);
*/