import { defineEventHandler, getQuery } from 'h3'
import data from '~/data'

interface QueryParams {
  id: string
}

export default defineEventHandler((event) => {
  const query = getQuery(event) as QueryParams
  const id = Number.parseInt(query.id)
  const item = data.find(product => product.id === id)
  return {
    item,
  }
})
