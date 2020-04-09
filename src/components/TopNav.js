import React from 'react';
import { Link } from 'gatsby';

function TopNav({ leftElement }) {
  return (
    <div css={styles.container}>
      {leftElement || <div />}

      <nav css={styles.menu}>
        <Link to="/" css={styles.link} activeStyle={styles.activeStyle}>
          Home
        </Link>
        <Link
          to="/blog"
          css={styles.link}
          activeStyle={styles.activeStyle}
          partiallyActive
        >
          Blog
        </Link>
      </nav>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  menu: {
    display: 'flex',
    justifyContent: 'flex-end',
    '> a + a': {
      marginLeft: 4
    }
  },
  link: {
    border: 0,
    boxShadow: 'none',
    textTransform: 'uppercase',
    fontWeight: 600,
    padding: '4px 16px',
    borderRadius: 4,
    position: 'relative',
    overflow: 'hidden',
    ':before': {
      content: ' ',
      position: 'absolute',
      height: 50,
      background: '#edc2c6',
      right: 0,
      left: 0,
      bottom: 0,
      transition: 'transform .3s',
      zIndex: -1,
      transform: 'translateY(45px)'
    },
    ':hover:before': {
      transform: 'translateY(0)',
      background: '#edc2c6'
    },
    ':hover': {
      color: 'inherit',
      background: 'inherit'
    }
  },
  activeStyle: {
    background: '#001F3F',
    color: '#fff',
    fontWeight: 700
  }
};

export default TopNav;
