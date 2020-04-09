import React from 'react';
import me from '../me.png';
import { MOBILE, opacityIn } from '../styles';

function ProfilePic({ size = 160 }) {
  return (
    <img
      src={me}
      alt="Portrait"
      css={{
        borderRadius: size / 2,
        width: size,
        height: size,
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
  );
}

export default ProfilePic;
