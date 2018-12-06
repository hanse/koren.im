import React from 'react';

const Pill = props => {
  return (
    <span
      css={{
        padding: '4px 7px',
        borderRadius: 4,
        margin: 2,
        background: '#f7eee6',
        fontSize: 14,
        fontWeight: '700',
        color: '#444',
        whiteSpace: 'pre'
      }}
      {...props}
    />
  );
};

export default Pill;
