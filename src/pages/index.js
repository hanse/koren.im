import React from 'react';
import Link from 'gatsby-link';
import Header from '../components/Header';
import Project from '../components/Project';

const IndexPage = () => (
  <div css={{ paddingTop: 50, paddingBottom: 50 }}>
    <Header />
    <p>
      I'm a developer mainly working with financial software at{' '}
      <a href="https://itera.no">Itera</a> and{' '}
      <a href="https://cicero.no">Cicero</a> plus various side projects.
      Currently I'm mostly doing typed JavaScript with Flow, React and React
      Native development, but I also have some experience with Python, Ruby (on
      Rails) and Java 8.
    </p>
    <h2>
      <span>Showcase</span>
    </h2>
    <Project
      index={0}
      name="Listfully"
      url="https://listfully.no/"
      tags={['JavaScript', 'React Native', 'iOS', 'Android']}
      description="Create and share your own gift lists. An app I created for a client for both iOS and Android."
    />
    {/*<Project
      index={1}
      name="Ninjagains"
      tags={['JavaScript', 'React Native']}
      url="https://getninjagains.com"
      description={'Track your strength workouts in an enjoyable manner.'}
    />*/}
    <Project
      index={2}
      name="Fuuto"
      tags={['JavaScript', 'React Native', 'iOS', 'Android']}
      description="A social football app I built for a client a couple of years ago when React Native was still in its early stages. One can safely say that React Native is continuously improving for the better. It was available on both iOS and Android."
      url="https://itunes.apple.com/us/app/fuuto/id1108571181?mt=8"
    />
    <Project
      index={3}
      name="fakturamaker.no"
      url="https://fakturamaker.no"
      tags={['JavaScript', 'Node.js', 'Angular.js']}
      description="The tool I use to create invoices. Generates PDFs using wkhtmltopdf."
    />
    <Project
      index={4}
      name="Timetracker"
      url="https://timetracker.koren.im"
      tags={['JavaScript', 'React']}
      description="A tool for tracking time spent on different tasks during the course of a day."
    />
    <Project
      index={5}
      name="react-calendar"
      url="https://github.com/Hanse/react-calendar"
      tags={['JavaScript', 'React', 'npm']}
      description="A flexible React Component for rendering standard monthly calendars."
    />
    <Project
      index={6}
      name="Abakus.no"
      url="https://abakus.no"
      tags={['JavaScript', 'React']}
      description="During my time at the Norwegian University of Science and Technology I helped build the new website for the fraternity Abakus. A rather big project written in React and Django."
    />
    <h2>
      <span>Contact</span>
    </h2>
    I'm all over the internet, including{' '}
    <a href="https://www.linkedin.com/in/hanskristiankoren/">LinkedIn</a> and{' '}
    <a href="https://github.com/Hanse">GitHub</a>. You can also email me at{' '}
    <a href="mailto:hanse@koren.im">hanse@koren.im</a>.
  </div>
);

export default IndexPage;
