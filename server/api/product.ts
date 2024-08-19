import data from '~/data';
import {defineEventHandler, getQuery} from 'h3';
import {Product} from '~/types/product';

interface QueryParams {
    id: string;
}

export default defineEventHandler((event): { item: Product | undefined } => {
    const query = getQuery(event) as QueryParams;
    const id = parseInt(query.id);

    const item: Product | undefined = data.find((product: Product) => product.id === id);

    return {
        item,
    };
});