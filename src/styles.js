import { css } from 'glamor';

export const MOBILE = '@media (max-width: 800px)';

export const opacityIn = css.keyframes('opacityIn', {
  '0%': {
    opacity: 0
  },
  '100%': {
    opacity: 1
  }
});

export const fadeIn = css.keyframes('fadeIn', {
  '0%': {
    opacity: 0,
    transform: 'scale(2)'
  },
  '100%': {
    opacity: 1,
    transform: 'scale(1)'
  }
});
