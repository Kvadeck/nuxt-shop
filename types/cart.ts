import type {Product} from "~/types/product";
import type {Client} from "~/types/client";

export interface CartFormProps {
    cart: Product[]
    totalPrice: number
}

export interface CartProducts {
    cart: Product[]
    totalPrice: number
    client: Client
}