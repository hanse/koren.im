import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import './index.css';

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Hans-Kristian Koren"
      meta={[
        { name: 'description', content: '' },
        {
          name: 'keywords',
          content:
            'react, react native, javascript, flow, consultant, itera, cicero'
        }
      ]}
    />
    <div
      css={{
        margin: '0 auto',
        maxWidth: 800,
        padding: 20
      }}
    >
      {children()}
    </div>
  </div>
);

export default Layout;
