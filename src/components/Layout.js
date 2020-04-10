import React from 'react';
import Helmet from 'react-helmet';
import { MOBILE } from '../styles';
import me from '../me.png';
import { useStaticQuery, graphql } from 'gatsby';

import '../global.css';

const twitter = props =>
  Object.entries({ card: 'summary', ...props }).map(([name, content]) => ({
    name: `twitter:${name}`,
    content
  }));

function Layout({ children, title, description = '', keywords = '' }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            keywords
            description
          }
        }
      }
    `
  );

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
          ...twitter({
            site: '@hanse',
            title,
            description,
            image: `https://koren.im${me}`
          })
        ]}
      />
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
