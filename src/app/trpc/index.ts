import { db } from '../db/index'
import { publicProcedure, router } from './trpc'

export const appRouter = router({
  expenseList: publicProcedure.query(async () => {
    const expenses = await db.expenses.findMany()
    return expenses
  }),
})

export type AppRouter = typeof appRouter
