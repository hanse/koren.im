import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Project from '../components/Project';
import { MOBILE } from '../styles';
import projects from '../projects';
import TopNav from '../components/TopNav';
import ProfilePic from '../components/ProfilePic';

const PROFILE_IMAGE_SIZE = 160;

function IndexPage() {
  return (
    <Layout title="Home">
      {false && <TopNav />}
      <div css={{ paddingTop: 50, paddingBottom: 50 }}>
        <Header />
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 20,
            [MOBILE]: {
              flexDirection: 'column-reverse'
            }
          }}
        >
          <p css={{ flex: 1 }}>
            I love solving problems using the best available tools. That often
            includes TypeScript and React (and React Native). Or it can be
            Node.js, Python or even Java.
          </p>
          <ProfilePic size={PROFILE_IMAGE_SIZE} />
        </div>
        <h2 className="section-header">
          <span>Showcase</span>
        </h2>
        <div
          css={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            margin: '0 -60px',
            [MOBILE]: {
              margin: 0
            }
          }}
        >
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>

        <section>
          <h2 className="section-header">
            <span>Contact</span>
          </h2>
          I'm all over the internet, including{' '}
          <a
            className="colorful"
            href="https://www.linkedin.com/in/hanskristiankoren/"
          >
            LinkedIn
          </a>
          ,{' '}
          <a className="colorful" href="https://twitter.com/hanse">
            Twitter
          </a>
          ,{' '}
          <a className="colorful" href="https://keybase.io/hanse">
            Keybase
          </a>{' '}
          and{' '}
          <a className="colorful" href="https://github.com/hanse">
            GitHub
          </a>
          . You can also email me at{' '}
          <a className="colorful" href="mailto:hanse@koren.im">
            hanse@koren.im
          </a>
          .
        </section>
      </div>
    </Layout>
  );
}

export default IndexPage;
