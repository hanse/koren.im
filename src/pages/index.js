import React from 'react';
import { IoLogoGithub } from 'react-icons/io';

import Header from '../components/Header';
import Layout from '../components/Layout';
import ProfilePic from '../components/ProfilePic';
import TopNav from '../components/TopNav';
import { MOBILE } from '../styles';

const PROFILE_IMAGE_SIZE = 160;

function IndexPage() {
  return (
    <Layout title="Home">
      <TopNav
        leftElement={
          <a href="https://github.com/hanse" css={{ fontWeight: 500 }}>
            <IoLogoGithub css={{ paddingTop: 2 }} />
            GitHub
          </a>
        }
      />
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
          <div style={{ flex: 1 }} className="textual-content">
            <p>
              I enjoy solving problems using the best available tools. Doing so
              often involves <strong>TypeScript</strong> and{' '}
              <strong>React</strong> (and React Native). Other times it can be{' '}
              <strong>Node.js</strong> or <strong>Python</strong> &mdash; or
              even <strong>Java</strong>. I build web apps, mobile apps and
              backend systems.
            </p>

            <p>
              <em>
                I currently work as a Software Engineer at{' '}
                <a href="https://oda.com" className="colorful">
                  Oda
                </a>
                .
              </em>
            </p>
          </div>
          <div
            css={{
              height: 0,
              [MOBILE]: { height: 20 }
            }}
          />
          <ProfilePic size={PROFILE_IMAGE_SIZE} />
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
