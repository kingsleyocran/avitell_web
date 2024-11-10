import { getServerSideSitemapLegacy } from 'next-sitemap'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const articles = await fetchArticles(); // Fetch all articles

  // const fields = articles.map(article => ({
  //   loc: `https://codebycodebeast.com/articles/${article.slug}`, // Adjust this based on your URL structure
  //   lastmod: new Date(article.updatedAt).toISOString(), // Assuming articles have an updatedAt field
  //   changefreq: 'daily',
  //   priority: 0.7,
  // }));

  const fields = [
    {
      loc: 'https://codebycodebeast.com/dynamic-path-1', // Absolute url
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
    {
      loc: 'https://codebycodebeast.com/dynamic-path-2', // Absolute url
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
  ]

  return getServerSideSitemapLegacy(ctx, fields)
}

// Default export to prevent next.js errors
export default function Sitemap() {}