export interface Product {
    id: number;
    name: string;
    description: string;
    color: string;
    price: number;
    imageSrc: string;
    imageAlt?: string;
    smell: string;
    quantity: number;
    thickness: string;
}

export interface ProductResponse {
    item: Product;
}