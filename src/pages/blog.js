import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Card from '../components/Card';
import TopNav from '../components/TopNav';

function BlogPage({ data }) {
  return (
    <Layout title="Blog">
      <TopNav
        leftElement={
          <Link to="/" className="boring">
            &larr; Hans-Kristian Koren
          </Link>
        }
      />
      <div css={{ paddingTop: 50, paddingBottom: 50 }}>
        <Header title="Tech Blog" />
        <section>
          {data.allMarkdownRemark.edges.map(
            ({ node: { excerpt, html, frontmatter, fields } }) => (
              <Card as={Link} to={fields.slug}>
                <h1 css={styles.h1}>{frontmatter.title}</h1>
                <span css={styles.date}>Published {frontmatter.date}</span>
              </Card>
            )
          )}
        </section>
      </div>
    </Layout>
  );
}

const styles = {
  article: {
    marginBottom: 32
  },
  h1: {
    fontSize: 32,
    '> a': {
      border: 'unset'
    }
  },
  date: {
    color: '#999',
    borderRadius: 4,
    fontWeight: 500
  }
};

export const query = graphql`
  query Query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            published
            title
          }
          excerpt
          fields {
            slug
          }
          html
        }
      }
    }
  }
`;

export default BlogPage;
