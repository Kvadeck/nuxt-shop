import data from '~/data';
import {defineEventHandler, getQuery} from 'h3';

interface QueryParams {
    id: string;
}

export default defineEventHandler((event) => {
    const query = getQuery(event) as QueryParams;
    const id = parseInt(query.id);
    const item = data.find((product) => product.id === id);
    return {
        item,
    };
});