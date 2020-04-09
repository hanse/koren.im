import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Project from '../components/Project';
import me from '../me.png';
import { MOBILE, opacityIn } from '../styles';
import projects from '../projects';
import { Link } from 'gatsby';
import TopNav from '../components/TopNav';

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
          <img
            src={me}
            alt="Portrait"
            css={{
              borderRadius: PROFILE_IMAGE_SIZE / 2,
              width: PROFILE_IMAGE_SIZE,
              height: PROFILE_IMAGE_SIZE,
              marginLeft: 10,
              filter: 'grayscale(100%)',
              ':hover': {
                filter: 'unset'
              },
              [MOBILE]: {
                marginLeft: 0,
                marginBottom: 10
              },
              animationDuration: `0.4s`,
              animationName: `${opacityIn}`,
              animationIterationCount: 1,
              animationFillMode: 'both'
            }}
          />
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
