import { defineEventHandler, getQuery } from 'h3'
import data from '~/data'
import type { Product } from '~/types/product'
import type { PaginatedResponse } from '~/types/pagination'

interface QueryParams {
  limit: string
  page: string
}

export default defineEventHandler((event): PaginatedResponse => {
  const query = getQuery(event) as QueryParams
  const limit = Number.parseInt(query.limit)
  const page = Number.parseInt(query.page)
  const items: Product[] = data

  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit

  const paginatedItems = items.slice(startIndex, endIndex)

  return {
    page,
    items: paginatedItems,
    totalPages: Math.ceil(items.length / limit),
  }
})
