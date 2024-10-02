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
          <lastmod>${item.date}+00:00</lastmod>
          <priority>1.00</priority>
        </url>`
    ).join('')}
    </urlset>
  `;
  fs.writeFileSync('public/sitemaps/types.xml', sitemap);
}

generateSitemap();
