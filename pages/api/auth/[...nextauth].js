import NextAuth from 'next-auth/next'
//import GithubProvider from "next-auth/providers/github";
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    /*         GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }), */
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // more providers can be added here
  ],
  secret: process.env.JWT_SECRET,
})
