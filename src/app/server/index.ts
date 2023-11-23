import { TRPCError } from '@trpc/server'
import { db } from '../db/index'
import { publicProcedure, router } from './trpc'
import { z } from 'zod'

export const appRouter = router({
  expenseList: publicProcedure.query(async () => {
    const expenses = await db.expenses.findMany()
    if (!expenses) {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'There were no expenses found.',
      })
    }
    return expenses
  }),

  // TODO: change this to private procedure eventually
  deleteExpense: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const expense = await db.expenses.findFirst({
        where: {
          id: input.id,
        },
      })

      if (!expense)
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'There were no expenses found',
        })

      await db.expenses.delete({
        where: {
          id: input.id,
        },
      })

      return expense
    }),

  // TODO: Test this
  createExpense: publicProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
        category: z.string(),
        amount: z.number(),
      })
    )
    .mutation(async (opts) => {
      const { input } = opts
      const expense = await db.expenses.create({
        data: {
          id: input.id,
          name: input.name,
          category: input.category,
          amount: input.amount,
        },
      })
      return expense
    }),
})

export type AppRouter = typeof appRouter
