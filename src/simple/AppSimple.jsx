import React from "react"
import "/src/styles/app.scss"
import { profile, skills, experiences, projects, contact } from "./data"

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
]

function AppSimple() {
  return (
    <div className="sp-app">
      <header className="sp-hero" id="top">
        <div className="sp-hero-inner">
          <div className="sp-hero-text">
            <p className="sp-hero-kicker">Hello...</p>
            <h1 className="sp-hero-title">
              I&apos;m <span className="sp-accent">Vidya Keerthi</span>
            </h1>
            <p className="sp-hero-headline">{profile.headline}</p>

            <div className="sp-hero-roles">
              {profile.roles.map((role) => (
                <span key={role} className="sp-pill">
                  {role}
                </span>
              ))}
            </div>

            <div className="sp-hero-links">
              {profile.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="sp-link-card"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sp-link-label">{link.label}</span>
                  <span className="sp-link-value">{link.value}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      <nav className="sp-nav">
        <div className="sp-nav-brand">VK</div>
        <ul className="sp-nav-list">
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`}>{section.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <main className="sp-main">
        <section id="about" className="sp-section">
          <div className="sp-section-header">
            <h2 className="sp-section-title">About me</h2>
            <p className="sp-section-subtitle">
              Get to know more about who I am and what I do.
            </p>
          </div>

          <div className="sp-section-grid">
            <div className="sp-card sp-card-large">
              <h3 className="sp-subtitle">Summary</h3>
              {profile.about.map((paragraph, index) => (
                <p key={index} className="sp-body-text">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="sp-card sp-card-side">
              <h3 className="sp-subtitle">Personal interests</h3>
              <ul className="sp-tag-list">
                {profile.interests.map((interest) => (
                  <li key={interest} className="sp-tag">
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="sp-section">
          <div className="sp-section-header">
            <h2 className="sp-section-title">Skills</h2>
            <p className="sp-section-subtitle">
              A quick overview of how I can help your team.
            </p>
          </div>

          <div className="sp-section-grid">
            <div className="sp-card sp-card-large">
              <h3 className="sp-subtitle">What I do</h3>
              <div className="sp-card-grid">
                {skills.highlights.map((item) => (
                  <article key={item.title} className="sp-card-mini">
                    <h4 className="sp-card-mini-title">{item.title}</h4>
                    <p className="sp-card-mini-text">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="sp-card sp-card-side">
              <h3 className="sp-subtitle">Tech stack</h3>
              <div className="sp-stack-columns">
                <div>
                  <h4 className="sp-stack-title">Frontend</h4>
                  <ul className="sp-chip-list">
                    {skills.frontend.map((item) => (
                      <li key={item} className="sp-chip">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="sp-stack-title">Backend & tools</h4>
                  <ul className="sp-chip-list">
                    {skills.backend.map((item) => (
                      <li key={item} className="sp-chip">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="sp-section">
          <div className="sp-section-header">
            <h2 className="sp-section-title">Experience</h2>
            <p className="sp-section-subtitle">
              Summary of my professional work experience.
            </p>
          </div>

          <div className="sp-timeline">
            {experiences.map((exp) => (
              <article key={exp.role + exp.company} className="sp-timeline-item">
                <div className="sp-timeline-meta">
                  <span className="sp-pill sp-pill-soft">{exp.period}</span>
                  <span className="sp-timeline-location">{exp.location}</span>
                </div>
                <h3 className="sp-timeline-title">
                  {exp.role} · <span className="sp-accent">{exp.company}</span>
                </h3>
                <p className="sp-body-text">{exp.summary}</p>
                <ul className="sp-bullet-list">
                  {exp.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <ul className="sp-chip-list">
                  {exp.tags.map((tag) => (
                    <li key={tag} className="sp-chip">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="sp-section">
          <div className="sp-section-header">
            <h2 className="sp-section-title">Projects</h2>
            <p className="sp-section-subtitle">
              A selection of products and applications I&apos;ve worked on.
            </p>
          </div>

          <div className="sp-card-grid">
            {projects.map((project) => (
              <article key={project.title} className="sp-card sp-card-project">
                <div className="sp-card-project-header">
                  <span className="sp-pill sp-pill-soft">{project.category}</span>
                </div>
                <h3 className="sp-project-title">{project.title}</h3>
                <p className="sp-body-text">{project.description}</p>
                <ul className="sp-chip-list">
                  {project.tags.map((tag) => (
                    <li key={tag} className="sp-chip">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="sp-section">
          <div className="sp-section-header">
            <h2 className="sp-section-title">Contact</h2>
            <p className="sp-section-subtitle">
              Don&apos;t hesitate to contact me. I&apos;d love to hear about your
              project or opportunity.
            </p>
          </div>

          <div className="sp-section-grid">
            <div className="sp-card sp-card-large">
              <h3 className="sp-subtitle">Send me a message</h3>
              <form
                className="sp-form"
                onSubmit={(event) => {
                  event.preventDefault()
                  const form = event.currentTarget
                  const formData = new FormData(form)
                  const name = formData.get("name")
                  const email = formData.get("email")
                  const message = formData.get("message")

                  // Very simple UX: just open the default mail client with pre-filled body.
                  const mailto = new URL(`mailto:${contact.email}`)
                  mailto.searchParams.set(
                    "subject",
                    `Portfolio contact from ${name || "website visitor"}`
                  )
                  mailto.searchParams.set(
                    "body",
                    `Name: ${name || ""}\nEmail: ${email || ""}\n\n${message || ""}`
                  )

                  window.location.href = mailto.toString()
                }}
              >
                <div className="sp-form-row">
                  <label className="sp-label">
                    Name
                    <input
                      name="name"
                      type="text"
                      className="sp-input"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="sp-label">
                    E-mail
                    <input
                      name="email"
                      type="email"
                      className="sp-input"
                      placeholder="you@example.com"
                    />
                  </label>
                </div>
                <label className="sp-label">
                  Message
                  <textarea
                    name="message"
                    rows={4}
                    className="sp-input sp-textarea"
                    placeholder="Tell me a bit about what you have in mind..."
                  />
                </label>
                <button type="submit" className="sp-button-primary">
                  Send message
                </button>
              </form>
            </div>

            <div className="sp-card sp-card-side">
              <h3 className="sp-subtitle">Or reach me directly</h3>
              <ul className="sp-contact-list">
                <li>
                  <span className="sp-contact-label">E-mail</span>
                  <a href={`mailto:${contact.email}`} className="sp-contact-value">
                    {contact.email}
                  </a>
                </li>
                <li>
                  <span className="sp-contact-label">LinkedIn</span>
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="sp-contact-value"
                  >
                    /vidya-keerthi
                  </a>
                </li>
                <li>
                  <span className="sp-contact-label">GitHub</span>
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="sp-contact-value"
                  >
                    /Keerthividya
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="sp-footer">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React.
        </p>
      </footer>
    </div>
  )
}

export default AppSimple

