'use client'

import Image from 'next/image'
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Folder,
  Sparkles,
  Play,
  Pause,
  ExternalLink,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const YOUTUBE_VIDEO_ID = '4JjgSddPHJs'

const languages = [
  'KISHOR',
  'किशोर',
  'কিশোর',
  'ਕਿਸ਼ੋਰ',
  'કિશોર',
  'କିଶୋର',
  'கிஷோர்',
  'కిషోర్',
  'ಕಿಶೋರ್',
  'കിഷോർ',
  'Кишор',
  'キショール',
  '키쇼르',
  'كيشور',
  'Κισόρ',
]

const projects = [
  {
    title: 'GMB Legend',
    tag: 'LOCAL SEO / PRODUCT',
    image: '/projects/gmb-legend.png',
    text: 'A multi-location local SEO management platform designed to make local search operations easier to understand, operate, and scale.',
    href: 'https://github.com/kishorkumarbairagi69/gmb-legend',
  },
  {
    title: 'SnapPage',
    tag: 'CHROME EXTENSION / MVP',
    image: '/projects/snap-page.png',
    text: 'A browser-side capture and annotation tool for capturing, editing, annotating and exporting accessible webpages.',
    href: 'https://github.com/kishorkumarbairagi69/snap-page',
  },
]

const experiments = [
  [
    '1.1M+',
    'organic clicks',
    'Across multiple website launches in 6 months',
  ],
  [
    '8',
    'average SERP position',
    'Across those website launches',
  ],
  [
    '35%',
    'organic traffic growth',
    'Through structured SEO improvements',
  ],
  [
    '100+',
    'evergreen pages',
    'Optimized around search intent and discovery',
  ],
  [
    '5+',
    'years in SEO',
    'Technical, content and organic growth',
  ],
  [
    '∞',
    'things to build',
    'Always experimenting beyond the day job',
  ],
]

export default function Home() {
  const [tab, setTab] = useState<
    'home' | 'projects' | 'playground' | 'about'
  >('home')

  const [folder, setFolder] = useState<
    'inspo' | 'photos' | null
  >(null)

  const [languageIndex, setLanguageIndex] = useState(0)

  const [isPlaying, setIsPlaying] = useState(false)

  const playerRef = useRef<any>(null)

  /*
   * Language rotation
   * 2.2 seconds per language
   */
  useEffect(() => {
    const timer = window.setInterval(() => {
      setLanguageIndex(
        (current) => (current + 1) % languages.length
      )
    }, 2200)

    return () => window.clearInterval(timer)
  }, [])

  /*
   * Load YouTube IFrame Player API
   */
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://www.youtube.com/iframe_api"]'
    )

    const createPlayer = () => {
      if (!window.YT || !window.YT.Player) return

      playerRef.current = new window.YT.Player(
        'youtube-player',
        {
          videoId: YOUTUBE_VIDEO_ID,

          playerVars: {
            autoplay: 0,
            controls: 0,
            disablekb: 1,
            fs: 0,
            modestbranding: 1,
            rel: 0,
            playsinline: 1,
          },

          events: {
            onStateChange: (event: any) => {
              if (
                event.data ===
                window.YT.PlayerState.PLAYING
              ) {
                setIsPlaying(true)
              } else {
                setIsPlaying(false)
              }
            },
          },
        }
      )
    }

    if (existingScript) {
      if (window.YT && window.YT.Player) {
        createPlayer()
      } else {
        window.onYouTubeIframeAPIReady = createPlayer
      }
    } else {
      window.onYouTubeIframeAPIReady = createPlayer

      const script = document.createElement('script')

      script.src =
        'https://www.youtube.com/iframe_api'

      script.async = true

      document.body.appendChild(script)
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy()
        playerRef.current = null
      }
    }
  }, [])

  const togglePlay = () => {
    const player = playerRef.current

    if (!player) return

    const state = player.getPlayerState()

    if (
      state === window.YT?.PlayerState?.PLAYING
    ) {
      player.pauseVideo()
    } else {
      player.playVideo()
    }
  }

  return (
    <main className="site">
      <div className="grid" />

      <header className="nav">
        <button
          className="orb"
          aria-label="home"
          onClick={() => setTab('home')}
        >
          <span />
        </button>

        <nav>
          {(
            ['projects', 'playground', 'about'] as const
          ).map((x) => (
            <button
              key={x}
              className={tab === x ? 'active' : ''}
              onClick={() => setTab(x)}
            >
              {x.toUpperCase()}
            </button>
          ))}
        </nav>

        <div className="socials">
          <a
            href="https://www.linkedin.com/in/kishor-kumar-bairagi"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>

          <a
            href="https://github.com/kishorkumarbairagi69"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>

          <a
            href="mailto:Kishorbairagi112@gmail.com"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </header>

      <div className="status left">
        NOW {tab === 'home' ? 'BUILDING' : 'VIEWING'}:{' '}
        {tab === 'home'
          ? 'ORGANIC GROWTH'
          : 'KISHOR BAIRAGI'}
      </div>

      <div className="status right">
        BASED IN NEW DELHI / INDIA
      </div>

      {tab === 'home' && (
        <HomeView
          setFolder={setFolder}
          folder={folder}
          language={languages[languageIndex]}
          isPlaying={isPlaying}
          togglePlay={togglePlay}
        />
      )}

      {tab === 'projects' && <ProjectsView />}

      {tab === 'playground' && <PlaygroundView />}

      {tab === 'about' && <AboutView />}

      <div className="cursor-note">
        CLICK THE RECORD TO PLAY
      </div>
    </main>
  )
}

function HomeView({
  setFolder,
  folder,
  language,
  isPlaying,
  togglePlay,
}: {
  setFolder: (
    x: 'inspo' | 'photos' | null
  ) => void

  folder: 'inspo' | 'photos' | null

  language: string

  isPlaying: boolean

  togglePlay: () => void
}) {
  return (
    <section className="home">
      <button
        className="folder folder-left"
        onClick={() =>
          setFolder(
            folder === 'inspo'
              ? null
              : 'inspo'
          )
        }
      >
        <Folder />

        <i>case studies</i>
      </button>

      <button
        className="folder folder-right-top"
        onClick={() =>
          setFolder(
            folder === 'photos'
              ? null
              : 'photos'
          )
        }
      >
        <Folder />

        <i>photos</i>
      </button>

      <div className="intro">
        <div
          className="scribble language-name"
          key={language}
        >
          {language}.
        </div>

        <p>
          is an <span>SEO specialist</span> who works
          across organic growth, technical SEO, content
          systems, local search, product experiments,
          and the many ways to make the web more
          discoverable.
        </p>
      </div>

      <div className="record-stage">
        <div className="record-shadow" />

        <button
          className={`record ${
            isPlaying ? 'is-playing' : ''
          }`}
          onClick={togglePlay}
          aria-label={
            isPlaying
              ? 'Pause music'
              : 'Play music'
          }
        >
          <div className="record-groove" />

          <div className="record-image music-record">
            <div
              id="youtube-player"
              className="youtube-player"
            />

            <div className="music-overlay">
              <div className="music-label">
                <strong>KISHOR</strong>

                <span>
                  YOUTUBE / PLAY
                </span>
              </div>

              <div className="music-play">
                {isPlaying ? (
                  <Pause size={25} />
                ) : (
                  <Play size={25} />
                )}
              </div>
            </div>
          </div>

          <div className="center-hole">
            <div />
          </div>
        </button>

        <div className="record-caption">
          <span>
            {isPlaying
              ? 'NOW PLAYING'
              : 'CLICK TO PLAY'}
          </span>

          <small>YOUTUBE</small>
        </div>
      </div>

      {folder && (
        <FolderWindow
          type={folder}
          close={() => setFolder(null)}
        />
      )}

      <div className="hero-meta">
        <span>
          <MapPin size={12} />
          NEW DELHI, INDIA
        </span>

        <span>
          SEO / ORGANIC GROWTH / PRODUCT
        </span>
      </div>
    </section>
  )
}

function FolderWindow({
  type,
  close,
}: {
  type: 'inspo' | 'photos'
  close: () => void
}) {
  return (
    <div className={`folder-window ${type}`}>
      <div className="window-bar">
        <span>{type}</span>

        <button onClick={close}>×</button>
      </div>

      {type === 'inspo' ? (
        <div className="window-copy">
          <b>things I build</b>

          <p>
            Local SEO systems, browser tools, content
            workflows, technical SEO processes and
            experiments that turn messy search problems
            into repeatable systems.
          </p>

          <div className="chips">
            <span>SEO</span>
            <span>PRODUCT</span>
            <span>BUILD</span>
          </div>
        </div>
      ) : (
        <div className="photo-grid">
          <Image
            src="/images/kishor.jpg"
            alt="Kishor Bairagi"
            width={150}
            height={190}
          />

          <div className="photo-note">
            Kishor Bairagi
            <br />

            <small>
              SEO Senior Associate
              <br />
              Physics Wallah
            </small>
          </div>
        </div>
      )}
    </div>
  )
}

function ProjectsView() {
  return (
    <section className="content projects-view">
      <div className="section-title">
        <span>PROJECTS</span>

        <h1>Things I actually built.</h1>

        <p>
          Products and experiments built around local
          search, browser workflows and the operational
          side of SEO.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((p, i) => (
          <article
            className="project-card"
            key={p.title}
          >
            <div className="project-media">
              {i === 0 ? (
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="600px"
                />
              ) : (
                <div className="snap-mock">
                  <div className="browser-top">
                    <i />
                    <i />
                    <i />
                  </div>

                  <div className="snap-body">
                    <span>CAPTURE</span>

                    <strong>EDIT</strong>

                    <em>SHARE</em>

                    <div className="crop" />
                  </div>
                </div>
              )}

              <span className="project-index">
                0{i + 1}
              </span>
            </div>

            <div className="project-copy">
              <div>
                <h2>{p.title}</h2>

                <span className="tag">
                  {p.tag}
                </span>
              </div>

              <p>{p.text}</p>

              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
              >
                GITHUB
                <ExternalLink size={14} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function PlaygroundView() {
  return (
    <section className="content playground-view">
      <div className="section-title centered">
        <span>PLAYGROUND</span>

        <h1>
          SEO, but make it measurable.
        </h1>

        <p>
          Selected proof points from SEO launches,
          organic growth work and the systems behind
          them.
        </p>
      </div>

      <div className="play-grid">
        {experiments.map(
          ([num, label, desc], i) => (
            <article
              className={`exp exp-${i}`}
              key={label}
            >
              <div className="exp-num">
                {num}
              </div>

              <div>
                <h3>{label}</h3>

                <p>{desc}</p>
              </div>

              {i % 2 === 0 && (
                <div className="tiny-orbit" />
              )}
            </article>
          )
        )}
      </div>

      <div className="play-note">
        <Sparkles size={16} />

        CURRENT PLAYGROUND: turning SEO operations
        into products people actually enjoy using.
      </div>
    </section>
  )
}

function AboutView() {
  return (
    <section className="content about-view">
      <div className="polaroid">
        <Image
          src="/images/kishor.jpg"
          alt="Kishor Bairagi"
          fill
          sizes="420px"
        />

        <div className="polaroid-caption">
          Kishor Bairagi / 2026
        </div>
      </div>

      <div className="about-copy">
        <h1>
          Hi, welcome to my world.
          <span>↘</span>
        </h1>

        <p>
          I’m an SEO Senior Associate focused on
          organic growth, technical SEO, content systems
          and the operational side of getting websites
          discovered.
        </p>

        <p>
          I like turning search problems into systems.
          Outside the day job, I build products that
          explore the same idea from a different angle.
        </p>

        <h4>CURRENT ADVENTURE:</h4>

        <p>
          SEO Senior Associate at{' '}
          <b>Physics Wallah</b>, while continuing to
          experiment with products and workflows that
          make the web easier to discover and operate.
        </p>

        <h4>CAREER:</h4>

        <ol>
          <li>
            Physics Wallah — SEO Senior Associate —
            May 2025–Present
          </li>

          <li>
            Webrex Designing — SEO Team Lead —
            Nov 2023–Apr 2025
          </li>

          <li>
            IMTS Institute — SEO Team Lead —
            Mar 2021–Oct 2022
          </li>
        </ol>

        <h4>MY PHILOSOPHIES:</h4>

        <ol>
          <li>
            Make complex search systems easier to
            operate.
          </li>

          <li>
            Ship useful things, not just ideas.
          </li>

        </ol>

        <div className="contact-line">
          <a href="mailto:Kishorbairagi112@gmail.com">
            Kishorbairagi112@gmail.com
          </a>

          <span>
            +91 9711546151
          </span>
        </div>
      </div>
    </section>
  )
}