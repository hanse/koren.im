import '../global.css';

import { graphql, useStaticQuery } from 'gatsby';

import Helmet from 'react-helmet';
import React from 'react';
import me from '../me.png';


function Layout({ children, title, description = '', keywords = '' }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          keywords
          description
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;
  const metaKeywords = keywords || site.siteMetadata.keywords;

  return (
    <>
      <Helmet
        title={title}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
        meta={[
          {
            name: 'description',
            content: metaDescription
          },
          {
            name: 'keywords',
            content: metaKeywords
          },
          {
            name: 'og:title',
            content: 'title'
          },
          {
            property: `og:description`,
            content: metaDescription
          },
          {
            property: `og:type`,
            content: `website`
          },
        ]}
      >
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#001f3f" />
        <script
          defer
          data-website-id="95b7f078-3112-426d-8a59-8458b19a7f6a"
          src="/analytics.js"
        />
      </Helmet>
      <div
        css={{
          margin: '0 auto',
          maxWidth: 920,
          padding: 20
        }}
      >
        {children}
      </div>
    </>
  );
}

export default Layout;
