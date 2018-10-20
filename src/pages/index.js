import React from 'react';
import Link from 'gatsby-link';
import { css } from 'glamor';

import Header from '../components/Header';
import Project from '../components/Project';
import me from '../me.png';
import { MOBILE, opacityIn } from '../styles';

const PROFILE_IMAGE_SIZE = 160;

const IndexPage = () => (
  <div css={{ paddingTop: 50, paddingBottom: 50 }}>
    <Header />
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        fontSize: 20,
        [MOBILE]: {
          flexDirection: 'column-reverse'
        }
      }}
    >
      <p css={{ flex: 1 }}>
        I'm a developer working at the consultancy firm{' '}
        <a href="https://itera.no">Itera</a>. I'm working with web frontends,
        mobile apps and backend systems using appropriate tools.
      </p>
      <img
        src={me}
        css={{
          borderRadius: PROFILE_IMAGE_SIZE / 2,
          width: PROFILE_IMAGE_SIZE,
          height: PROFILE_IMAGE_SIZE,
          marginLeft: 10,
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
    </div>
    <h2>
      <span>Showcase</span>
    </h2>
    <div
      css={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        margin: '0 -60px',
        [MOBILE]: {
          margin: 0
        }
      }}
    >
      <Project
        index={0}
        name="Listfully"
        url="https://listfully.no/"
        tags={['JavaScript', 'React Native', 'iOS', 'Android']}
        description="Create and share your own gift lists. An app I created for a client for both iOS and Android."
        appStore="https://itunes.apple.com/us/app/listfully/id1252572755?mt=8"
        playStore="https://play.google.com/store/apps/details?id=com.listfully"
      />
      <Project
        index={1}
        name="Ninjagains"
        tags={['JavaScript', 'React Native', 'iOS', 'Android']}
        url="https://getninjagains.com"
        description={'Track your strength workouts effortlessly.'}
        appStore="https://itunes.apple.com/no/app/ninjagains/id1400435707"
      />
      <Project
        index={2}
        name="Fuuto"
        tags={['JavaScript', 'React Native', 'iOS', 'Android']}
        description="A social football app I built for a client a couple of years ago. It was available on both iOS and Android."
        url="https://itunes.apple.com/us/app/fuuto/id1108571181?mt=8"
        appStore="https://itunes.apple.com/us/app/fuuto/id1108571181?mt=8"
        playStore="https://play.google.com/store/apps/details?id=com.fuuto&utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
      />
      <Project
        index={3}
        name="Fakturamaker.no"
        url="https://fakturamaker.no"
        tags={['JavaScript', 'Node.js', 'Angular.js']}
        description="The tool I use to create invoices."
      />
      <Project
        index={4}
        name="Timetracker"
        url="https://timetracker.koren.im"
        tags={['JavaScript', 'React']}
        description="A very beta-ish tool for tracking time spent on different tasks during the course of a day."
      />
      <Project
        index={5}
        name="react-calendar"
        url="https://github.com/hanse/react-calendar"
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
      <Project
        index={7}
        name="Running Pace Calculator"
        url="https://running.koren.im"
        tags={['JavaScript', 'React', 'React Native Web']}
        description="Calculate the required pace and speed to reach a running time-goal."
      />
      <Project
        index={8}
        name="Maconomy CLI"
        url="https://github.com/hanse/maconomy"
        tags={['Node.js']}
        description="JavaScript library and command line interface for Deltek's Maconomy time reporting software. Made it because their UI is objectively useless and I have to use it every week."
      />
    </div>
    <h2>
      <span>Contact</span>
    </h2>
    I'm all over the internet, including{' '}
    <a href="https://www.linkedin.com/in/hanskristiankoren/">LinkedIn</a>,{' '}
    <a href="https://twitter.com/hanse">Twitter</a>,{' '}
    <a href="https://keybase.io/hanse">Keybase</a> and{' '}
    <a href="https://github.com/hanse">GitHub</a>. You can also email me at{' '}
    <a href="mailto:hanse@koren.im">hanse@koren.im</a>.
  </div>
);

export default IndexPage;
