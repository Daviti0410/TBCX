import { supabase } from "../../../lib/connection";
import { NextResponse } from "next/server";

interface BlogPost {
  title: string;
  description: string;
}

export async function POST(req: Request): Promise<Response> {
  console.log(supabase);
  try {
    const body: BlogPost = await req.json();
    const { title, description } = body;

    if (!title || !description) {
      return NextResponse.json(
        { error: "Title and Description are required" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("blogs")
      .insert([{ title, description }]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ post: data }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
