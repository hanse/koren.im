import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Header from '../components/Header';
import TopNav from '../components/TopNav';

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;

  return (
    <Layout title={post.frontmatter.title} description={post.excerpt}>
      <TopNav
        leftElement={
          <Link to="/blog" className="boring">
            &larr; Back to archive
          </Link>
        }
      />
      <div css={{ paddingTop: 50, paddingBottom: 50 }}>
        <Header title={post.frontmatter.title} />
        <article>
          <header
            css={{
              textAlign: 'center',
              color: '#999',
              fontWeight: 500,
              marginBottom: 20
            }}
          >
            Published {post.frontmatter.date}
          </header>
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            css={{
              '> p + p': {
                marginTop: 16
              },
              '> .gatsby-highlight pre': {
                margin: '32px 0 32px 0',
                background: 'white',
                borderLeft: '6px solid #eee'
              },
              '> ul, > ol': {
                padding: '16px 0 16px 24px'
              },
              '> blockquote': {
                fontStyle: 'italic',
                padding: 16
              },
              '> h2': {
                marginTop: 16,
                fontWeight: 700
              }
            }}
          />
        </article>

        <nav>
          <ul
            css={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: '32px 0'
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev" className="boring">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next" className="boring">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
