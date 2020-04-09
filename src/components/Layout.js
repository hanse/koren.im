import React from 'react';
import Helmet from 'react-helmet';
import { MOBILE } from '../styles';
import me from '../me.png';
import { useStaticQuery } from 'gatsby';

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
          maxWidth: 800,
          padding: 20,
          [MOBILE]: {
            textAlign: 'center'
          }
        }}
      >
        {children}
      </div>
    </>
  );
}

export default Layout;
