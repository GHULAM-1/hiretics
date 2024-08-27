import NextAuth from "next-auth";
import { authOptions } from "@/lib/next-auth-options";
import { NextRequest, NextResponse } from "next/server";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
