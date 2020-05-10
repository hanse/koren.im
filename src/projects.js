import ninjagains from './images/ninjagains.png';
import abakus from './images/abakus.png';
import groceries from './images/groceries.png';
import fakturamaker from './images/fakturamaker.png';
import listfully from './images/listfully.png';
import listfullyShopify from './images/listfully-shopify.png';

export default [
  {
    type: 'app',
    name: 'Listfully Mobile App',
    url: 'https://listfully.no/',
    tags: ['JavaScript', 'React Native', 'iOS', 'Android'],
    appIconSrc: listfully,
    description:
      'Create and share your own gift lists. Listfully app for iOS and Android.',
    appStore: 'https://itunes.apple.com/us/app/listfully/id1252572755?mt=8',
    playStore: 'https://play.google.com/store/apps/details?id=com.listfully'
  },
  {
    type: 'app',
    name: 'Ninjagains',
    tags: ['React Native', 'iOS', 'Android', 'PostgreSQL'],
    url: 'https://getninjagains.com',
    appIconSrc: ninjagains,
    description: 'Mobile app for tracking strength workouts effortlessly.',
    appStore: 'https://itunes.apple.com/no/app/ninjagains/id1400435707'
  },
  {
    type: 'pwa',
    name: 'Snittfart',
    url: 'https://snittfart.no',
    tags: ['JavaScript', 'React', 'React Native Web'],
    appIconSrc:
      'https://raw.githubusercontent.com/hanse/snittfart/master/app.png',
    description:
      'Calculate the required pace and speed to reach a running time-goal. Useful for race-planning.'
  },
  {
    type: 'web',
    name: 'Listfully Shopify App',
    url: 'https://apps.shopify.com/listfully',
    appIconSrc: listfullyShopify,
    description:
      'Storefront widget for saving products from a Shopify store to Listfully and a dashboard for store owners to view analytics and get insight.'
  },
  {
    type: 'pwa',
    name: 'Groceries',
    url: 'https://matvarer.koren.im',
    tags: ['TypeScript', 'React', 'Firebase'],
    appIconSrc: groceries,
    description: 'Real-time collaborative grocery lists.'
  },
  {
    type: 'web',
    name: 'Fakturamaker.no',
    url: 'https://fakturamaker.no',
    tags: ['JavaScript', 'Node.js', 'Angular.js'],
    appIconSrc: fakturamaker,
    description: 'Generate decent looking invoices as PDF.'
  },
  {
    type: 'npm',
    name: 'Maconomy CLI',
    url: 'https://github.com/hanse/maconomy',
    tags: ['Node.js'],
    description:
      "JavaScript library and command line interface for Deltek's Maconomy time reporting software. Made it because their UI is objectively useless and I have to use it every week.\n\n`npm install -g maconomy-cli`"
  },
  {
    type: 'npm',
    name: 'react-calendar',
    url: 'https://github.com/hanse/react-calendar',
    packageName: 'react-calendar-component',
    tags: ['JavaScript', 'React', 'npm'],
    description:
      'A flexible React Component for rendering monthly calendars.\n\n`npm install react-calendar-component`'
  },
  {
    type: 'web',
    name: 'Abakus.no',
    url: 'https://abakus.no',
    tags: ['JavaScript', 'React'],
    appIconSrc: abakus,
    description:
      'During my time at the Norwegian University of Science and Technology I helped build the new website for the fraternity Abakus. A rather big project written in React and Django.'
  },
  {
    type: 'web',
    name: 'Premium Bingo Cards',
    url: 'https://premiumbingocards.com',
    tags: ['Next.js'],
    description: 'Generate a massive amount of printable Bingo cards on-demand!'
  }
];
