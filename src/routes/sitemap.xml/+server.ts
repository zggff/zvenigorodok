import type { RequestHandler } from '@sveltejs/kit';

const website = 'zvenigorodok.com';

export const GET: RequestHandler = async () => {
    const pages = ['cleaning'];
    const body = sitemap(pages);

    const headers = {
        'Cache-Control': 'max-age=0, s-maxage=3600',
        'Content-Type': 'application/xml'
    };
    return new Response(body, { headers });
};

const sitemap = (pages: string[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${website}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>

  ${pages
        .map(
            (page) => `
  <url>
    <loc>${website}/${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  `
        )
        .join('')}
  </urlset>`;
