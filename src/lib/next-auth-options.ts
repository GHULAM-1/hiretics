import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
<<<<<<< HEAD
=======
import connectDB from "./db-connect";
import User from "@/models/user-model";
>>>>>>> f8a5ab65a7f7654d04355130d860e93c58fee6f8
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
<<<<<<< HEAD
      console.log("ok gamay we are here", user, account, profile, credentials);
=======
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

>>>>>>> f8a5ab65a7f7654d04355130d860e93c58fee6f8
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
