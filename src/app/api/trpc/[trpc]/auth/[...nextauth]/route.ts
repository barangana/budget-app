import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

// TODO: Setup nextauth
// https://next-auth.js.org/getting-started/example

export const authOptions = {
  providers: [],
}

export default NextAuth(authOptions)
