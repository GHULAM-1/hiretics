import { connect } from "@/lib/db-connect";
import User from "@/models/user-model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    await connect();

    const user = await User.findOne({ name: "ghulam" });
    console.log("User found:", user);

    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      );
    }

    return NextResponse.json({ message: "User exists!!!" }, { status: 200 });
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
