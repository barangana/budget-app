import { db } from '../db/index'
import { publicProcedure, router } from './trpc'
const appRouter = router({
  userList: publicProcedure.query(async () => {
    // returns all users in the db
    const users = await db.user.findMany()
    return users
  }),
})

export type AppRouter = typeof appRouter
