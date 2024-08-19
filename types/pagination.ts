import type {Product} from "~/types/product";

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
}

export interface PaginatedResponse {
    page: number;
    items: Product[];
    totalPages: number;
}