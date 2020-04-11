import React, { useState } from 'react';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import Layout from '../components/Layout';
import Header from '../components/Header';
import { Project, ProjectCard } from '../components/Project';
import { MOBILE } from '../styles';
import projects from '../projects';
import TopNav from '../components/TopNav';
import ProfilePic from '../components/ProfilePic';
import { IoLogoGithub } from 'react-icons/io';

const PROFILE_IMAGE_SIZE = 160;

function IndexPage() {
  const [selectedProjectId, setSelectedProjectId] = useState(null);
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
              backend APIs.
            </p>

            <p>
              The last few years I've been working at the consultancy firm{' '}
              <a href="https://itera.no" className="colorful">
                Itera
              </a>
              , helping large financial institutions in Norway 🇳🇴 improve their
              digital experiences.
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
        <h2 className="section-header">
          <span>Showcase</span>
        </h2>
        <div
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gridGap: '20px'
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              onOpen={() => setSelectedProjectId(index)}
            />
          ))}
        </div>

        {selectedProjectId != null && (
          <>
            <DialogOverlay
              isOpen={selectedProjectId != null}
              onDismiss={() => setSelectedProjectId(null)}
              css={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'rgba(0, 0, 0, 0.6)'
              }}
            >
              <DialogContent
                css={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  maxWidth: 640,
                  padding: 16,
                  ':focus': {
                    outline: 'none'
                  }
                }}
              >
                <Project
                  {...projects[selectedProjectId]}
                  onClose={() => setSelectedProjectId(null)}
                />
              </DialogContent>
            </DialogOverlay>
          </>
        )}

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
