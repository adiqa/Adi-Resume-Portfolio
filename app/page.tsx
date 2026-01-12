"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "certifications", "thoughts", "connect"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <button
        onClick={toggleTheme}
        className="fixed top-8 right-8 z-10 group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300 bg-background/80 backdrop-blur-sm"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <svg
            className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </button>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <header
          id="intro"
          ref={(el) => { sectionsRef.current[0] = el }}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">PORTFOLIO / 2026</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  Adi
                  <br />
                  <span className="text-muted-foreground">Kadic</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Experienced Senior QA Engineer with a passion for testing and ensuring the
                  <span className="text-foreground"> quality </span>
                   of
                  <span className="text-foreground"> software products</span>.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Available for work
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">CURRENTLY</div>
                <div className="space-y-2">
                  <div className="text-foreground">Open for work</div> */}
                  {/* <div className="text-muted-foreground">freelancer @{" "}
                    <Link 
                      href="https://movethechain.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-foreground transition-colors duration-300"
                    >
                      Move the Chain
                    </Link>

                  </div> */}
                  {/* <div className="text-xs text-muted-foreground">2021 — Present (4 years)</div> */}
                {/* </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">FOCUS</div>
                <div className="flex flex-wrap gap-2">
                  {["Cypress", "Playwright", "Codeception", "TypeScript", "Javascript", "PHP", "MySQL"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div> */}
          </div>
        </header>

        <section
          id="work"
          ref={(el) => { sectionsRef.current[1] = el }}
          className="pt-6 pb-16 sm:pt-8 sm:pb-20 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Selected Work</h2>
              <div className="text-sm text-muted-foreground font-mono">2014 — 2026</div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  year: "2020 - ongoing",
                  role: "Senior QA Engineer",
                  url: "https://mukuru.com",
                  company: "Mukuru",
                  description: "Senior QA Engineer in largest african fin-tech company.",
                  responsibility: "Maintaining automated testing framework, working with external partners, and ensuring that millions of transactions are processed seamlessly.",
                  tech: ["Codeception", "PHP", "Javascript"],
                },
                {
                  year: "2021 - 2025",
                  role: "QA Automation Engineer",
                  company: "Move the Chain",
                  url: "https://movethechain.com",
                  description: "Helping organizations keep their employees engaged, informed and connected.",
                  responsibility: "Building and maintaining the QA automation framework, ensuring that the platform is tested and working as expected.",
                  tech: ["Cypress", "Playwright", "MySQL", "TypeScript", "Javascript"],
                },
                {
                  year: "2014 - 2016",
                  role: "System Administrator",
                  company: "School of Economics and Business",
                  url: "https://www.efsa.unsa.ba/ef/en",
                  description: "Ensuring all kinds of IT systems are working as expected.",
                  responsibility: "Maintenance of IT systems, infrastructure, and network.",
                  tech: ["MySQL", "Linux", "Bash"],
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-2">
                    <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {job.year}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
                      {job.url ? (
                        <Link 
                          href={job.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground underline transition-colors duration-300"
                        >
                          {job.company}
                        </Link>
                      ) : (
                        <div className="text-muted-foreground">{job.company}</div>
                      )}
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">{job.description}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed max-w-lg">{job.responsibility}</p>
                  </div>

                  <div className="lg:col-span-4 flex flex-wrap gap-x-2 gap-y-[2px] lg:justify-end mt-2 lg:mt-0">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="certifications"
          ref={(el) => { sectionsRef.current[2] = el }}
          className="pt-12 pb-16 sm:pt-16 sm:pb-20 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Certifications & Licences</h2>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {[
                {
                  title: "ISTQB® Certified Tester, Foundation Level",
                  issuer: "ISTQB",
                  date: "Nov 2019",
                  credentialId: "19-CTFL-166990-12",
                  description: "Foundation-level understanding of software testing principles and methodologies.",
                  type: "certification",
                  url: "https://scr.istqb.org/"
                },
                {
                  title: "Microsoft Technology Associate for Software Development Fundamentals",
                  issuer: "Microsoft",
                  date: "Jan 2017",
                  credentialId: "snh2-XLJu",
                  description: "Assessed and validated core knowledge in areas like general software development, core programming concepts, object-oriented programming, web and desktop applications, and databases.",
                  type: "licence",
                  url: "https://learn.microsoft.com/en-us/certifications/mta-software-development-fundamentals"
                },
                // {
                //   title: "React Developer of the Year",
                //   issuer: "TechCrunch Awards",
                //   date: "Oct 2024",
                //   credentialId: "TCA-RDY-2024",
                //   description: "Recognized for outstanding contributions to the React ecosystem and community.",
                //   type: "achievement"
                // },
                
              ].map((item, index) => (
                <article
                  key={index}
                  className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          item.type === 'certification' 
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' 
                            : item.type === 'licence' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                            : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                        }`}>
                          {item.type === 'certification' ? 'Certification' : item.type === 'licence' ? 'Licence' : 'Achievement'}
                        </span>
                        <span className="text-xs text-muted-foreground font-mono">
                          {item.date}
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground font-mono">
                        {item.credentialId}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.issuer}
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {item.description}
                    </p>

                    <Link 
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    >
                      <span>View credential</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="thoughts"
          ref={(el) => { sectionsRef.current[3] = el }}
          className="pt-14 pb-18 sm:pt-18 sm:pb-22 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Honours and Awards</h2>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {[
                {
                  title: "yum.com 'Hall of Fame' - Acknowledgment to Security Researcher – YUM",
                  excerpt: "Acknowledgment for finding Reflected Cross-site Scripting (XSS) vulnerability on one of the yum.com subdomains.",
                  date: "N/A",
                  readTime: "",
                  url: ""
                },
                {
                  title: "avast.com - Acknowledgement for finding and disclosing Security Vulnerability – AVAST",
                  excerpt: "Sensitive Information Disclosure - AVAST Acknowledgement to Adi Kadic for finding exposed GIT config file.",
                  date: "Jul 2021",
                  readTime: "",
                  url: ""
                },
                {
                  title: "europa.eu 'Hall of Fame' - Acknowledgment to Security Researcher – European Union",
                  excerpt: "Sensitive information disclosure on several *.europa.eu subdomains",
                  date: "Dec 2020",
                  readTime: "",
                  url: "https://www.cert.europa.eu/cert/newsletter/en/latest_HallOfFame_.html",
                },
                {
                  title: "myob.com 'Hall of Fame' - Acknowledgment to Security Researcher – MYOB",
                  excerpt: "Vulnerability disclosure - Subdomain Takeover",
                  date: "Nov 2020",
                  readTime: "",
                  url: "https://www.myob.com/au/about/security/report-security-vulnerability",
                },
              ].map((post, index) => (
                <article
                  key={index}
                  className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>

                    {post.url && (
                      <Link 
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                      >
                        <span>Read more</span>
                        <svg
                          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="connect" ref={(el) => { sectionsRef.current[4] = el }} className="pt-14 pb-18 sm:pt-18 sm:pb-22 opacity-0">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Always interested in new opportunities, collaborations, and conversations about technology.
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:adi.kadic1@gmail.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">adi.kadic1@gmail.com</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">FIND ME ON</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "GitHub", handle: "@adiqa", url: "https://github.com/adiqa" },
                  { name: "X", handle: "@AdiKadic91", url: "https://x.com/AdiKadic91" },
                  { name: "LinkedIn", handle: "adikadic", url: "https://www.linkedin.com/in/adikadic/" },
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-8 sm:py-12 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              {/* <div className="text-sm text-muted-foreground">© 2025 Felix Macaspac. All rights reserved.</div>
              <div className="text-xs text-muted-foreground">Built with v0.dev by Felix Macaspac</div> */}
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
