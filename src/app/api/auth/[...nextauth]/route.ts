import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

// TODO: Setup nextauth
// https://next-auth.js.org/getting-started/example

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
  ],
}

export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
