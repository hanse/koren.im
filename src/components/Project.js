import React from 'react';
import { css } from 'glamor';

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

    {description && <div css={{ paddingTop: 10 }}>{description}</div>}
  </article>
);

export default Project;
