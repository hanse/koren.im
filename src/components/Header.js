import React from 'react';
import { css } from 'glamor';

const fadeIn = css.keyframes('fadeIn', {
  '0%': {
    opacity: 0,
    transform: 'scale(2)'
  },
  '100%': {
    opacity: 1,
    transform: 'scale(1)'
  }
});

const animation = {
  animationDuration: `0.1s`,
  animationName: `${fadeIn}`,
  animationIterationCount: 1,
  animationFillMode: 'both',
  display: 'inline-block'
};

class Header extends React.PureComponent {
  render() {
    return (
      <h1
        css={{
          letterSpacing: '2px',
          textTransform: 'uppercase',
          textShadow: '0 4px 0 #ed717e',
          fontWeight: 900,
          fontSize: 60,
          color: '#001f3f',
          textAlign: 'center',
          borderBottom: '10px dotted #eee',
          margin: '0 -50px 30px -50px',
          overflowWrap: 'break-word',
          '@media (max-width: 800px)': {
            fontSize: 40,
            padding: '0 30px 15px 30px',
            lineHeight: 1
          }
        }}
      >
        {'Hans-Kristian\xa0Koren'.split('').map((char, index) => (
          <span
            key={index}
            css={{
              ...animation,
              animationDelay: `${index / 20 + 0.1}s`
            }}
          >
            {char}
          </span>
        ))}
      </h1>
    );
  }
}

export default Header;
