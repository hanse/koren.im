import React from 'react';
import Markdown from 'react-markdown';
import { MOBILE, opacityIn } from '../styles';
import Pill from './Pill';
import Card from './Card';

const animation = index => ({
  animationDuration: `0.8s`,
  animationName: `${opacityIn}`,
  animationIterationCount: 1,
  animationFillMode: 'both',
  animationDelay: `${index / 10}s`
});

const Project = ({
  name,
  image,
  description,
  url,
  tags = [],
  type = 'project',
  appStore,
  playStore,
  index
}) => (
  <Card index={index} width="49%">
    <div>
      <div>
        <h3>
          {url ? (
            <a href={url} className="colorful">
              {name}
            </a>
          ) : (
            name
          )}
        </h3>
        <div css={{ marginTop: 10 }}>
          {tags.map(tag => (
            <Pill key={tag}>{tag}</Pill>
          ))}
        </div>
      </div>

      {description && (
        <div css={{ paddingTop: 10 }}>
          <Markdown source={description} />
        </div>
      )}
    </div>

    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        [MOBILE]: {
          justifyContent: 'center'
        },
        paddingTop: 15
      }}
    >
      {appStore && (
        <a
          href={appStore}
          css={{
            border: 0,
            boxShadow: 'none',
            ':hover': { background: 'transparent' }
          }}
        >
          <img
            alt="App Store"
            src="https://devimages-cdn.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
            height="30"
          />
        </a>
      )}

      {playStore && (
        <a
          href={playStore}
          css={{
            border: 0,
            boxShadow: 'none',
            ':hover': { background: 'transparent' }
          }}
        >
          <img
            alt="Get it on Google Play"
            src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
            height="40"
          />
        </a>
      )}
    </div>
  </Card>
);

export default Project;
