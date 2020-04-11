import React from 'react';
import Markdown from 'react-markdown';
import { MOBILE, opacityIn } from '../styles';
import Pill from './Pill';
import Card from './Card';
import npmIcon from '../images/npm.svg';
import { IoIosClose } from 'react-icons/io';
import { FiExternalLink } from 'react-icons/fi';

const animation = index => ({
  animationDuration: `0.8s`,
  animationName: `${opacityIn}`,
  animationIterationCount: 1,
  animationFillMode: 'both',
  animationDelay: `${index / 10}s`
});

export function ProjectCard({
  name,
  image,
  description,
  url,
  tags = [],
  type = 'project',
  appIconSrc,
  appStore,
  playStore,
  index,
  onOpen
}) {
  return (
    <Card
      index={index}
      style={{ background: 'white', cursor: 'pointer' }}
      as="a"
      onClick={onOpen}
    >
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <h3 css={{ fontSize: 20, fontWeight: 500 }}>{name}</h3>
        {type === 'npm' && <img src={npmIcon} width={40} />}
        {(type === 'app' || type === 'pwa') && (
          <img
            src={appIconSrc}
            width={40}
            style={{
              borderRadius: '22.5%',
              border: '1px solid rgba(0, 0, 0, 0.125)'
            }}
          />
        )}
        {type === 'web' && <img src={appIconSrc} width={70} />}
      </div>
    </Card>
  );
}

export function Project({
  name,
  image,
  description,
  url,
  tags = [],
  type = 'project',
  appStore,
  playStore,
  appIconSrc,
  index,
  onClose
}) {
  return (
    <div
      css={{
        background: 'white',
        position: 'relative',
        padding: 0,
        overflow: 'hidden',
        ':focus': {
          outline: 'none'
        },
        borderRadius: 6
      }}
    >
      <header
        css={{
          background: '#eee',
          padding: 24,
          paddingTop: 80,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          [MOBILE]: {
            padding: 24,
            paddingTop: 60
          }
        }}
      >
        <h1
          css={{
            fontSize: 44,
            [MOBILE]: {
              fontSize: 32
            }
          }}
        >
          {name}
        </h1>

        <div>
          {type === 'npm' && <img src={npmIcon} width={40} />}
          {(type === 'app' || type === 'pwa') && (
            <img
              src={appIconSrc}
              width={40}
              style={{
                borderRadius: '22.5%',
                border: '1px solid rgba(0, 0, 0, 0.125)'
              }}
            />
          )}
          {type === 'web' && <img src={appIconSrc} width={70} />}
        </div>
      </header>

      <div css={{ padding: '24px 24px' }}>
        <div css={{ minHeight: 160 }}>
          <div
            css={{
              marginTop: 10,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center'
            }}
          >
            {tags.map(tag => (
              <Pill key={tag}>{tag}</Pill>
            ))}
          </div>

          {description && (
            <div css={{ paddingTop: 10 }}>
              <Markdown source={description} />
            </div>
          )}
        </div>

        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            [MOBILE]: {
              justifyContent: 'center'
            },
            paddingTop: 32
          }}
        >
          {appStore && (
            <a
              href={appStore}
              css={{
                border: 0,
                boxShadow: 'none',
                ':hover': { background: 'transparent' }
              }}
            >
              <img
                alt="App Store"
                src="https://devimages-cdn.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                height={30}
              />
            </a>
          )}

          {playStore && (
            <a
              href={playStore}
              css={{
                border: 0,
                boxShadow: 'none',
                ':hover': { background: 'transparent' }
              }}
            >
              <img
                alt="Get it on Google Play"
                src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                height={40}
              />
            </a>
          )}

          {url && (
            <a
              href={url}
              rel="external"
              css={{
                marginLeft: 'auto',
                background: '#282828',
                color: 'white',
                borderRadius: 4,
                padding: '4px 12px',
                fontWeight: 500
              }}
            >
              Visit <FiExternalLink style={{ paddingTop: 2 }} />
            </a>
          )}
        </div>
      </div>

      <button
        css={{
          background: 'rgba(0, 0, 0, 0.8)',
          height: 32,
          width: 32,
          borderRadius: 16,
          position: 'absolute',
          border: 0,
          top: 8,
          right: 8,
          fontWeight: 500,
          fontSize: 30,
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'sans-serif',
          color: '#fff',
          transition: 'transform .15s',
          ':hover': {
            transform: 'scale(1.05)'
          }
        }}
        onClick={onClose}
      >
        <IoIosClose />
      </button>
    </div>
  );
}
