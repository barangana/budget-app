import { TRPCError } from '@trpc/server'
import { db } from '../db/index'
import { publicProcedure, router } from './trpc'
import { z } from 'zod'

export const appRouter = router({
  expenseList: publicProcedure.query(async () => {
    const expenses = await db.expenses.findMany()
    if (!expenses) {
      console.log('no expenses found')
    }
    return expenses
  }),

  // TODO: change this to private procedure eventually
  deleteExpense: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const file = await db.expenses.findFirst({
        where: {
          id: input.id,
        },
      })

      if (!file) throw new TRPCError({ code: 'NOT_FOUND' })

      await db.expenses.delete({
        where: {
          id: input.id,
        },
      })

      return file
    }),
})

export type AppRouter = typeof appRouter
