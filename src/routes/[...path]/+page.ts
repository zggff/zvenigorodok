import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = (_event) => {
    // @ts-ignore
    throw error(404, 'Страница не найдена');
};
