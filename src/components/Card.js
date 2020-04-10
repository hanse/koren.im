import React from 'react';
import { opacityIn } from '../styles';

const animation = index => ({
  animationDuration: `0.8s`,
  animationName: `${opacityIn}`,
  animationIterationCount: 1,
  animationFillMode: 'both',
  animationDelay: `${index / 10}s`
});

function Card({ as: Component = 'div', index = 0, ...props }) {
  return (
    <Component
      {...props}
      css={{
        position: 'relative',
        boxShadow: '0 0 30px rgba(0, 0, 0, .1)',
        border: '1px solid #dcdcdc',
        transition: 'transform 0.15s',
        ':hover': {
          boxShadow: '0 0 35px rgba(0, 0, 0, .15)',
          transform: 'scale(1.02)',
          background: 'inherit',
          color: 'inherit'
        },
        borderRadius: 5,
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        ...animation(index)
      }}
    />
  );
}

export default Card;
