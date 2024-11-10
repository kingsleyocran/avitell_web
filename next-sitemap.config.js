/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.climatestorytellers.earth',
  changefreq: 'weekly',
  priority: 0.9,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml', '/dashboard', '/dashboard/*', '/portal', '/portal/*'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.climatestorytellers.earth/server-sitemap.xml',
    ],
  },
}

