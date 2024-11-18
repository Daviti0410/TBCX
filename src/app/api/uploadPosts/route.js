import { supabase } from "@/lib/connection";

export async function POST(req) {
  try {
    const body = await req.json();
    const { title, description } = body;

    if (!title || !description) {
      return new Response(
        JSON.stringify({ error: "Title and Description is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const { data, error } = await supabase.from.insert([
      { title, description },
    ]);

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
    return new Response(JSON.stringify({ post: data }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Resposne(
      JSON.stringify({ error: "An unexpected error occurred" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
