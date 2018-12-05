import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Project from '../components/Project';
import me from '../me.png';
import { MOBILE, opacityIn } from '../styles';
import projects from '../projects';

const PROFILE_IMAGE_SIZE = 160;

const IndexPage = () => (
  <Layout>
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
          I'm a pragmatic developer who likes to make stuff solving small or big
          problems (usually with JavaScript involved). Things I do include
          frontend (web and mobile apps) & backend programming, infrastructure
          automation and designing visuals needed to make great experiences.
        </p>
        <img
          src={me}
          alt="Portrait"
          css={{
            borderRadius: PROFILE_IMAGE_SIZE / 2,
            width: PROFILE_IMAGE_SIZE,
            height: PROFILE_IMAGE_SIZE,
            marginLeft: 10,
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
      <h2>
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
      <h2>
        <span>Contact</span>
      </h2>
      I'm all over the internet, including{' '}
      <a href="https://www.linkedin.com/in/hanskristiankoren/">LinkedIn</a>,{' '}
      <a href="https://twitter.com/hanse">Twitter</a>,{' '}
      <a href="https://keybase.io/hanse">Keybase</a> and{' '}
      <a href="https://github.com/hanse">GitHub</a>. You can also email me at{' '}
      <a href="mailto:hanse@koren.im">hanse@koren.im</a>.
    </div>
  </Layout>
);

export default IndexPage;
