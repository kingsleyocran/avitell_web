/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.avitelltechnologies.com',
  changefreq: 'weekly',
  priority: 0.9,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml', '/dashboard', '/dashboard/*', '/portal', '/portal/*', '/privacy', '/terms'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.avitelltechnologies.com/server-sitemap.xml',
    ],
  },
}

