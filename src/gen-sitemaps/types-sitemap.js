const fs = require('fs');

const query = `
  query GET_Services_type {
  serviceTypes {
    nodes {
      slug
      name
    }
  }
}
`;


const SITE_URI = 'https://www.topproviders.net';

function getCurrentDateInISO8601Format() {
  const now = new Date();
  const year = now.getUTCFullYear();
  const month = String(now.getUTCMonth() + 1).padStart(2, '0'); // Month is zero-based, so add 1 and pad to two digits
  const day = String(now.getUTCDate()).padStart(2, '0');
  const hours = String(now.getUTCHours()).padStart(2, '0');
  const minutes = String(now.getUTCMinutes()).padStart(2, '0');
  const seconds = String(now.getUTCSeconds()).padStart(2, '0');
  const iso8601Date = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+00:00`;
  return iso8601Date;
}

const currentDateInISO8601Format = getCurrentDateInISO8601Format();

async function fetchData() {
  const response = await fetch(`https://topproviders.mufaqar.com/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });
  const { data }  = await response.json();
  return data;
}



async function generateSitemap() {
  const data = await fetchData();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${data?.serviceTypes?.nodes?.map(
      (item) => `
        <url>
          <loc>${SITE_URI}/${item.slug}</loc>
          <lastmod>${currentDateInISO8601Format}</lastmod>
          <priority>1.00</priority>
        </url>`
    ).join('')}
    </urlset>
  `;
  fs.writeFileSync('public/sitemaps/types.xml', sitemap);
}

generateSitemap();
