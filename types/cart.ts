import type { Product } from '~/types/product'
import type { Client } from '~/types/client'

export interface CartFormProps {
  cart: Product[]
  totalPrice: number
}

export interface CartProducts {
  cart: Product[]
  totalPrice: number
  client: Client
}

export interface CartItem {
  id: number
  name: string
  description: string
  color: string
  price: number
  imageSrc: string
  imageAlt?: string
  smell: string
  quantity: number
  thickness: string
}
