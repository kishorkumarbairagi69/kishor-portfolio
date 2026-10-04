<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>Kishor Bairagi — Portfolio</title>

  <meta
    name="description"
    content="Portfolio of Kishor Bairagi — SEO Senior Associate, Organic Growth Specialist, and builder based in New Delhi, India."
  />

  <style>
    :root {
      --background: #f7f7f2;
      --text: #171717;
      --muted: #666;
      --border: #d8d8d0;
      --card: #ffffff;
      --accent: #2457ff;
    }

    * {
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      margin: 0;
      background: var(--background);
      color: var(--text);
      font-family:
        Inter,
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        sans-serif;
      line-height: 1.7;
    }

    body::before {
      content: "";
      position: fixed;
      inset: 0;
      pointer-events: none;
      opacity: 0.35;
      background-image:
        linear-gradient(#ddd 1px, transparent 1px),
        linear-gradient(90deg, #ddd 1px, transparent 1px);
      background-size: 32px 32px;
      z-index: -1;
    }

    .container {
      width: min(1100px, calc(100% - 40px));
      margin: 0 auto;
    }

    header {
      padding: 70px 0 50px;
      border-bottom: 1px solid var(--border);
    }

    .eyebrow {
      font-family: monospace;
      font-size: 12px;
      letter-spacing: 0.14em;
      color: var(--muted);
      text-transform: uppercase;
    }

    h1 {
      margin: 15px 0;
      font-family: Georgia, "Times New Roman", serif;
      font-size: clamp(48px, 8vw, 100px);
      line-height: 0.95;
      font-weight: 400;
      letter-spacing: -0.05em;
    }

    .intro {
      max-width: 700px;
      font-size: 20px;
      color: #444;
    }

    nav {
      display: flex;
      gap: 20px;
      margin-top: 35px;
      flex-wrap: wrap;
    }

    nav a {
      color: var(--text);
      text-decoration: none;
      font-family: monospace;
      font-size: 13px;
      border-bottom: 1px solid var(--text);
    }

    section {
      padding: 80px 0;
      border-bottom: 1px solid var(--border);
    }

    h2 {
      font-family: Georgia, "Times New Roman", serif;
      font-size: 48px;
      font-weight: 400;
      line-height: 1;
      margin: 0 0 30px;
    }

    h3 {
      font-size: 25px;
      margin: 0 0 10px;
    }

    p {
      color: #444;
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 1px;
      background: var(--border);
      margin-top: 40px;
    }

    .stat {
      background: var(--card);
      padding: 28px 20px;
    }

    .stat strong {
      display: block;
      font-family: Georgia, serif;
      font-size: 36px;
      font-weight: 400;
    }

    .stat span {
      display: block;
      margin-top: 5px;
      font-family: monospace;
      font-size: 11px;
      text-transform: uppercase;
      color: var(--muted);
    }

    .projects {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 25px;
    }

    .project {
      background: var(--card);
      border: 1px solid var(--border);
      padding: 30px;
      min-height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .project-number {
      font-family: monospace;
      font-size: 12px;
      color: var(--muted);
    }

    .tag {
      display: inline-block;
      margin: 5px 0 15px;
      font-family: monospace;
      font-size: 11px;
      letter-spacing: 0.08em;
      color: var(--accent);
    }

    .project a,
    .contact a {
      color: var(--text);
      text-decoration: none;
      border-bottom: 1px solid var(--text);
    }

    .career {
      display: grid;
      gap: 0;
      border-top: 1px solid var(--border);
    }

    .job {
      display: grid;
      grid-template-columns: 220px 1fr;
      gap: 30px;
      padding: 25px 0;
      border-bottom: 1px solid var(--border);
    }

    .job-date {
      font-family: monospace;
      font-size: 12px;
      color: var(--muted);
    }

    .job h3 {
      margin: 0;
    }

    .job p {
      margin-bottom: 0;
    }

    .stack {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 25px;
    }

    .stack span {
      padding: 8px 12px;
      border: 1px solid var(--border);
      background: var(--card);
      font-family: monospace;
      font-size: 12px;
    }

    .contact {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
    }

    .contact-card {
      padding: 30px;
      background: var(--card);
      border: 1px solid var(--border);
    }

    footer {
      padding: 35px 0;
      font-family: monospace;
      font-size: 12px;
      color: var(--muted);
      display: flex;
      justify-content: space-between;
      gap: 20px;
      flex-wrap: wrap;
    }

    @media (max-width: 800px) {
      .stats {
        grid-template-columns: repeat(2, 1fr);
      }

      .projects {
        grid-template-columns: 1fr;
      }

      .job {
        grid-template-columns: 1fr;
        gap: 5px;
      }

      .contact {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 500px) {
      .container {
        width: min(100% - 28px, 1100px);
      }

      header {
        padding-top: 45px;
      }

      section {
        padding: 55px 0;
      }

      h2 {
        font-size: 38px;
      }

      .stats {
        grid-template-columns: 1fr 1fr;
      }
    }
  </style>
</head>

<body>

  <header>
    <div class="container">
      <div class="eyebrow">SEO / ORGANIC GROWTH / PRODUCT</div>

      <h1>Kishor Bairagi.</h1>

      <p class="intro">
        SEO Senior Associate, Organic Growth Specialist, and builder
        focused on technical SEO, content systems, local search,
        product experiments, and making the web more discoverable.
      </p>

      <nav>
        <a href="#about">ABOUT</a>
        <a href="#projects">PROJECTS</a>
        <a href="#career">CAREER</a>
        <a href="#stack">STACK</a>
        <a href="#contact">CONTACT</a>
      </nav>
    </div>
  </header>

  <main>

    <!-- ABOUT -->
    <section id="about">
      <div class="container">
        <div class="eyebrow">01 / ABOUT</div>

        <h2>Turning search problems into systems.</h2>

        <p class="intro">
          I’m Kishor Bairagi, an SEO professional based in New Delhi,
          India. I work across organic growth, technical SEO,
          content systems, local SEO, search visibility, and SEO
          operations.
        </p>

        <p>
          Outside my day job, I build products and tools around SEO,
          browser workflows, and operational problems. I like shipping
          useful things rather than leaving ideas on a whiteboard.
        </p>

        <div class="stats">
          <div class="stat">
            <strong>1.1M+</strong>
            <span>Organic Clicks</span>
          </div>

          <div class="stat">
            <strong>8</strong>
            <span>Avg. SERP Position</span>
          </div>

          <div class="stat">
            <strong>35%</strong>
            <span>Traffic Growth</span>
          </div>

          <div class="stat">
            <strong>100+</strong>
            <span>Pages Optimized</span>
          </div>

          <div class="stat">
            <strong>5+</strong>
            <span>Years SEO</span>
          </div>
        </div>
      </div>
    </section>

    <!-- PROJECTS -->
    <section id="projects">
      <div class="container">
        <div class="eyebrow">02 / PROJECTS</div>

        <h2>Things I actually built.</h2>

        <div class="projects">

          <article class="project">
            <div>
              <div class="project-number">01</div>

              <h3>GMB Legend</h3>

              <div class="tag">
                LOCAL SEO / PRODUCT
              </div>

              <p>
                A multi-location local SEO management platform
                designed to make local search operations easier
                to understand, operate, and scale.
              </p>

              <p>
                Built around business and location management,
                profile health, local SEO auditing,
                recommendations, reviews, visibility,
                tasks, and reporting.
              </p>
            </div>

            <a
              href="https://github.com/kishorkumarbairagi69/gmb-legend"
              target="_blank"
              rel="noopener noreferrer"
            >
              VIEW ON GITHUB →
            </a>
          </article>

          <article class="project">
            <div>
              <div class="project-number">02</div>

              <h3>SnapPage</h3>

              <div class="tag">
                CHROME EXTENSION / MVP
              </div>

              <p>
                A browser-side capture and annotation tool built
                around the idea:
                <strong>Capture. Edit. Share.</strong>
              </p>

              <p>
                Supports full-page capture, crop, annotation,
                text, highlights, blur, shapes, undo/redo,
                zoom, PDF workflows, downloads, and keyboard
                shortcuts.
              </p>
            </div>

            <a
              href="https://github.com/kishorkumarbairagi69/snap-page"
              target="_blank"
              rel="noopener noreferrer"
            >
              VIEW ON GITHUB →
            </a>
          </article>

        </div>
      </div>
    </section>

    <!-- CAREER -->
    <section id="career">
      <div class="container">
        <div class="eyebrow">03 / CAREER</div>

        <h2>Where I've worked.</h2>

        <div class="career">

          <article class="job">
            <div class="job-date">
              MAY 2025 — PRESENT
            </div>

            <div>
              <h3>Physics Wallah</h3>
              <strong>SEO Senior Associate</strong>

              <p>
                Working across organic growth, technical SEO,
                content systems, search visibility, and
                scalable SEO operations.
              </p>
            </div>
          </article>

          <article class="job">
            <div class="job-date">
              NOV 2023 — APR 2025
            </div>

            <div>
              <h3>Webrex Designing</h3>
              <strong>SEO Team Lead</strong>

              <p>
                Led SEO initiatives focused on organic growth,
                content optimization, technical improvements,
                and search performance.
              </p>
            </div>
          </article>

          <article class="job">
            <div class="job-date">
              MAR 2021 — OCT 2022
            </div>

            <div>
              <h3>IMTS Institute</h3>
              <strong>SEO Team Lead</strong>

              <p>
                Worked on SEO strategy, content systems,
                organic visibility, and search growth.
              </p>
            </div>
          </article>

        </div>
      </div>
    </section>

    <!-- STACK -->
    <section id="stack">
      <div class="container">
        <div class="eyebrow">04 / BUILDING</div>

        <h2>Tools I work with.</h2>

        <div class="stack">
          <span>SEO</span>
          <span>Technical SEO</span>
          <span>Local SEO</span>
          <span>Organic Growth</span>
          <span>Content Systems</span>
          <span>Next.js</span>
          <span>React</span>
          <span>TypeScript</span>
          <span>Tailwind CSS</span>
          <span>Node.js</span>
          <span>PostgreSQL</span>
          <span>Prisma</span>
          <span>Redis</span>
          <span>BullMQ</span>
          <span>Chrome Extensions</span>
          <span>GitHub</span>
        </div>
      </div>
    </section>

    <!-- PHILOSOPHY -->
    <section>
      <div class="container">
        <div class="eyebrow">05 / PHILOSOPHY</div>

        <h2>How I think.</h2>

        <p class="intro">
          Make complex search systems easier to operate.
        </p>

        <p class="intro">
          Ship useful things, not just ideas.
        </p>

        <p class="intro">
          Leave every system cleaner than I found it.
        </p>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact">
      <div class="container">
        <div class="eyebrow">06 / CONTACT</div>

        <h2>Let's build something useful.</h2>

        <div class="contact">

          <div class="contact-card">
            <div class="eyebrow">EMAIL</div>

            <p>
              <a href="mailto:Kishorbairagi112@gmail.com">
                Kishorbairagi112@gmail.com
              </a>
            </p>
          </div>

          <div class="contact-card">
            <div class="eyebrow">PHONE</div>

            <p>
              +91 9711546151
            </p>
          </div>

          <div class="contact-card">
            <div class="eyebrow">LINKEDIN</div>

            <p>
              <a
                href="https://www.linkedin.com/in/kishor-kumar-bairagi"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/kishor-kumar-bairagi
              </a>
            </p>
          </div>

          <div class="contact-card">
            <div class="eyebrow">GITHUB</div>

            <p>
              <a
                href="https://github.com/kishorkumarbairagi69"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/kishorkumarbairagi69
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>

  </main>

  <footer>
    <div class="container">
      © Kishor Bairagi
      <span>NEW DELHI / INDIA</span>
    </div>
  </footer>

</body>
</html>
