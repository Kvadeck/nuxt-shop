import { defineEventHandler, readBody } from 'h3'
import type { CartProducts } from '~/types/cart'

// Save cart products in memory...
const cartProducts: CartProducts[] = []

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<CartProducts>(event)
    cartProducts.push(body)
    return {
      status: 201,
      message: 'Корзина успешно добавлена милорд...',
      cartProducts: body,
    }
  }
  catch (error) {
    return {
      status: 500,
      message: 'При добавление возникли ошибки...',
      error: error.message,
    }
  }
})
