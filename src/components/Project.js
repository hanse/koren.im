import React from 'react';
import { css } from 'glamor';
import Markdown from 'react-markdown';

const fromLeft = css.keyframes('fromLeft', {
  '0%': {
    opacity: 0
  },
  '100%': {
    opacity: 1
  }
});

const Pill = props => {
  return (
    <span
      css={{
        padding: '4px 7px',
        borderRadius: 4,
        background: '#ddd',
        margin: 2,
        background: '#f7eee6',
        fontSize: 16,
        fontWeight: '700',
        color: '#444'
      }}
      {...props}
    />
  );
};

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
  <article
    css={{
      marginBottom: 50,
      position: 'relative',
      animationDuration: `0.8s`,
      animationName: `${fromLeft}`,
      animationIterationCount: 1,
      animationFillMode: 'both',
      animationDelay: `${index / 10}s`
    }}
  >
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '@media (max-width: 600px)': {
          display: 'block'
        }
      }}
    >
      <h3>{url ? <a href={url}>{name}</a> : name}</h3>
      <div>{tags.map(tag => <Pill key={tag}>{tag}</Pill>)}</div>
    </div>

    {description && (
      <div css={{ paddingTop: 10 }}>
        <Markdown source={description} />
      </div>
    )}

    <div css={{ display: 'flex', alignItems: 'center' }}>
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
  </article>
);

export default Project;
