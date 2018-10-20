import React from 'react';
import Helmet from 'react-helmet';
import { MOBILE } from '../styles';
import me from '../me.png';

import '../global.css';

const twitter = props =>
  Object.entries({ card: 'summary', ...props }).map(([name, content]) => ({
    name: `twitter:${name}`,
    content
  }));

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Hans-Kristian Koren"
      meta={[
        { name: 'description', content: '' },
        {
          name: 'keywords',
          content:
            'react, react native, javascript, flow, consultant, devops, cloud, mobile apps'
        },
        ...twitter({
          site: '@hanse',
          title: 'Hans-Kristian Koren',
          description: "@hanse's web site",
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
  </div>
);

export default Layout;
