import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import connectDB from "./db-connect";
import User from "@/models/user-model";
export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("ok gamay we are here", user.name);
      await connectDB();
      const userName = user.name;
      const checkUserName = user.name;
      const userEmail = user.email;
      const res = await User.findOne({ "userInfo.userName": checkUserName });

      if (!res) {
        const newUserRes = await User.create({
          userInfo: { userName, userEmail },
          userProjects: [],
        });
        console.log(newUserRes, "creating new user");
        return true;
      }

      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, token, user }) {
      return session;
    },
    async jwt({ token, user, account, profile }) {
      return token;
    },
  },
  jwt: {
    // The maximum age of the NextAuth.js issued JWT in seconds.
    // Defaults to `session.maxAge`.
    maxAge: 60,
  },
};
