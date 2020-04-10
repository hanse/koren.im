import React from 'react';
import { MOBILE, fadeIn } from '../styles';

const animation = {
  animationDuration: `0.1s`,
  animationName: `${fadeIn}`,
  animationIterationCount: 1,
  animationFillMode: 'both',
  display: 'inline-block'
};

function Header({ title = 'Hans-Kristian Koren' }) {
  return (
    <h1
      css={{
        textTransform: 'uppercase',
        textShadow: '0 4px 0 #ed717e',
        fontWeight: 900,
        fontSize: 60,
        color: '#001f3f',
        textAlign: 'center',
        margin: '0 -50px 30px -50px',
        overflowWrap: 'normal',
        transform: 'rotate(-1deg)',
        [MOBILE]: {
          fontSize: 40,
          paddingBottom: 20,
          margin: '0 0 30px 0',
          lineHeight: 1
        }
      }}
    >
      {title
        .replace(/ /g, '\xa0')
        .split('')
        .map((char, index) => (
          <span
            key={index}
            css={{
              ...animation,
              animationDelay: `${index / 20 + 0.05}s`
            }}
          >
            {char}
          </span>
        ))}
    </h1>
  );
}

export default Header;
