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

  // TODO: Test this & change to private procedure eventually
  createExpense: publicProcedure
    .input(
      z.object({
        name: z.string(),
        category: z.string(),
        amount: z.number(),
      })
    )
    .mutation(async (opts) => {
      const { input } = opts
      const expense = await db.expenses.create({
        data: {
          name: input.name,
          category: input.category,
          amount: input.amount,
        },
      })
      return expense
    }),

  register: publicProcedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .mutation(async (opts) => {
      const { input } = opts
      console.log(input)

      // check for existing user
      const existingUser = await db.user.findUnique({
        where: {
          email: input.email,
        },
      })

      // handle the case where if there is no user in the db and if there is a user in the db
      // add encrypted password
      if (!existingUser) {
        const user = await db.user.create({
          data: {
            email: input.email,
            password: input.password,
          },
        })
        return user
      }
    }),
})

export type AppRouter = typeof appRouter
