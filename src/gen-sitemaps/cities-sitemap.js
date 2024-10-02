const fs = require('fs');

const SITE_URI = 'https://www.topproviders.net';
const BASE_URL = 'https://topproviders.mufaqar.com/wp-json/custom/v1/states-cities';
const POSTS_PER_PAGE = 10000; // Adjust if needed

// Fetch state-wise cities with dynamic serviceType and offset
async function fetchStateWiseCity(serviceType, offset = 0) {
  const response = await fetch(`${BASE_URL}?posts_per_page=${POSTS_PER_PAGE}&offset=${offset}`);
  const citiesData = await response.json();
  const resultUrls = [];

  // Iterate through the keys and their associated arrays
  for (const key in citiesData) {
    const subArray = citiesData[key];
    for (const subValue of subArray) {
      const url = `${SITE_URI}/${serviceType}/${key}/${subValue}`;
      resultUrls.push(url);
    }
  }

  return resultUrls;
}

// Get current date in ISO8601 format
function getCurrentDateInISO8601Format() {
  const now = new Date();
  const year = now.getUTCFullYear();
  const month = String(now.getUTCMonth() + 1).padStart(2, '0');
  const day = String(now.getUTCDate()).padStart(2, '0');
  const hours = String(now.getUTCHours()).padStart(2, '0');
  const minutes = String(now.getUTCMinutes()).padStart(2, '0');
  const seconds = String(now.getUTCSeconds()).padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+00:00`;
}

// Generate a dynamic sitemap file
async function generateSitemap(serviceType, index, offset) {
  const stateWiseCity = await fetchStateWiseCity(serviceType, offset);
  const currentDateInISO8601Format = getCurrentDateInISO8601Format();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${stateWiseCity.map(
        (item) => `
          <url>
            <loc>${item}</loc>
            <lastmod>${currentDateInISO8601Format}</lastmod>
            <priority>1.00</priority>
          </url>
        `
      ).join('')} 
    </urlset>
  `;

  fs.writeFileSync(`public/sitemaps/cities/cities-${serviceType}-${index}-sitemap.xml`, sitemap);
  console.log(`Sitemap for ${serviceType} cities-${index}-sitemap.xml generated.`);
}

// Generate sitemaps for multiple service types dynamically
async function generateAllSitemaps() {
  const serviceTypes = ['internet', 'tv', 'internet-tv']; // Dynamic services list
  let offset = 0;
  let index = 1;
  let hasMoreData = true;

  for (const serviceType of serviceTypes) {
    while (hasMoreData) {
      console.log(`Fetching data for ${serviceType}, offset ${offset}`);
      const stateWiseCity = await fetchStateWiseCity(serviceType, offset);

      if (stateWiseCity.length > 0) {
        await generateSitemap(serviceType, index, offset);
        offset += POSTS_PER_PAGE; // Move to the next batch
        index++; // Increment file index for the next sitemap
      } else {
        hasMoreData = false; // Stop if no more data
      }
    }

    // Reset for the next service type
    offset = 0;
    index = 1;
    hasMoreData = true;
  }
}

generateAllSitemaps();
