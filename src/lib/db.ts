import { MongoClient } from 'mongodb';
import { env } from '$env/dynamic/private';

const DB_URI = env.DB_URI ?? 'mongodb://localhost:27017';
console.log(DB_URI);

const client = new MongoClient(DB_URI);
await client.connect();
export default client.db('zvenigorodok');
