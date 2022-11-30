import type { RequestHandler } from './$types';

import type { Review, ReviewTarget } from '$lib/reviews';
import db from '$lib/db';
import { json } from '@sveltejs/kit';

const collection = db.collection('reviews');

export const GET: RequestHandler = async ({ url }) => {
    const target = url.searchParams.get('target');

    const filter = target === null ? {} : { target: target };
    const reviews = (await collection.find(filter).limit(10).toArray()) as unknown as Review[];

    return json(reviews);
};

export const POST: RequestHandler = async ({ request }) => {
    const review: Review = await request.json();
    if (
        typeof review.text === 'undefined' ||
        typeof review.user === 'undefined' ||
        typeof review.date === 'undefined' ||
        typeof review.target === 'undefined'
    ) {
        return new Response('incorrect data', { status: 400 });
    }
    await collection.insertOne(review);
    return new Response('', { status: 200 });
};
