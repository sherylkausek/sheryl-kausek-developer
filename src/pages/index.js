// Step 1: Import React
import * as React from 'react'
import SiteFooter from '../components/footer'
import profileImg from '../images/smk-profile.png'
import projectImg from '../images/featured-project.png'
import MobileMenu from '../components/mobileMenu'

// Step 2: Define your component
function IndexPage() {
  return (
    <>
      <main>
        <div id="menuItems" className="menu-items" style={{ display: "none" }}>
          <span className="close-menu" role="button" tabIndex={0} onClick={() => {
            const menuItems = document.querySelector("#menuItems")
            if (menuItems) {
              menuItems.style.display = "none"
            }
          }} onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault()
              const menuItems = document.querySelector("#menuItems")
              if (menuItems) {
                menuItems.style.display = "none"
              }
            }
          }} title="Close menu" aria-label="Close menu">X</span>
          <ul>
            <li><a href="#intro" aria-label="Intro">Intro</a></li>
            <li><a href="#featured-project" aria-label="Featured Client Work">Featured Client Work</a></li>
            <li><a href="#experience" aria-label="Experience">Experience</a></li>
          </ul>
        </div>
        <div className="hero">
          <section className="innerHero">
            <div className="mobile-menu">
              <MobileMenu color="white" size={32} />
            </div>
            <div className="hover hover-1"></div>
            <div className="hover hover-2"></div>
            <div className="hover hover-3"></div>
            <div className="hover hover-4"></div>
            <div className="hover hover-5"></div>
            <div className="hover hover-6"></div>
            <div className="hover hover-7"></div>
            <div className="hover hover-8"></div>
            <div className="hover hover-9"></div>
            <h1 className="fade-in fade-in--on-load" aria-label="Sheryl Morgan Kausek">Sheryl Morgan Kausek</h1>
          </section>
        </div>

        <div className="content">
          <section id="intro">
            <div className="section-container">
              <img src={profileImg} alt="Sheryl Morgan Kausek" className="profile-pic" />
              <div className="info-wrapper">
                <h2 className="fade-in fade-in--on-load">
                  Senior AEM Content Author | Enterprise CMS | Technical Web Producer
                </h2>
                <p className="fade-in fade-in--on-load" style={{ '--fade-delay': '0.15s' }}>
                  Hi. I'm a <strong>Senior AEM Content Author</strong> with 20 years of web production experience, including more than 13 years supporting <strong>IBM</strong>'s digital ecosystem. I've worked extensively with Adobe Experience Manager (AEM), along with Drupal, custom CMS platforms, and Gatsby/MDX, building and maintaining enterprise web pages with a strong front-end foundation in HTML and CSS.
                </p>
                <p className="fade-in fade-in--on-load" style={{ '--fade-delay': '0.15s' }}>
                  I'm experienced in translating Figma designs into AEM pages using existing components, and have hands-on experience using blocks in AEM Edge Delivery Services (EDS), with a focus on responsive QA, publishing workflows, accessibility, and technical collaboration. I enjoy working with UX designers, writers, engineers, project managers, and stakeholders to turn content and design requirements into polished, production-ready web experiences.
                </p>
              </div>
            </div>
          </section>

          <section id="tech-skills">
            <div className="section-container">
              <div className="two-cols">
                <h3 className="fade-in fade-in--on-load">Core competencies</h3>
                <ul className="fade-in--stagger">
                  <li className="fade-in fade-in--on-load">
                    <span>AEM Content Authoring & CMS Operations:</span> Creating and maintaining enterprise web pages using Adobe Experience Manager (AEM Sites); managing multilingual content; hands-on experience with AEM Edge Delivery Services
                  </li>
                  <li className="fade-in">
                    <span>Figma-to-AEM Implementation:</span> Translating Figma designs into AEM pages using existing components; supporting design-to-UI implementation
                  </li>
                  <li className="fade-in">
                    <span>Release Management &amp; Responsive QA:</span> Content publishing, phased releases, code review, deployment workflows, and responsive QA
                  </li>
                  <li className="fade-in">
                    <span>Documentation, Workflow &amp; Accessibility:</span> Creating and updating AEM authoring and publishing guides, technical documentation, Jira/Airtable workflows, technical SEO structure, and WCAG accessibility
                  </li>
                </ul>
              </div>
              <div className="two-cols">
                <h3 className="fade-in fade-in--on-load" style={{ '--fade-delay': '0.1s' }}>
                  Technology skills
                </h3>
                <ul className="fade-in--stagger">
                  <li className="fade-in fade-in--on-load" style={{ '--fade-delay': '0.1s' }}>
                    <span>Front-end:</span> HTML5, CSS3, SCSS, Responsive Design, JavaScript (ES6+)
                  </li>
                  <li className="fade-in">
                    <span>Content Platforms:</span> AEM, Drupal (content authoring); WordPress (theming, full-site builds)
                  </li>
                  <li className="fade-in">
                    <span>Frameworks &amp; Content:</span> Gatsby, Bootstrap, MDX
                  </li>
                  <li className="fade-in">
                    <span>Tools &amp; Workflows:</span> Figma, Git, GitHub, Jira, Airtable
                  </li>
                  <li className="fade-in">
                    <span>Practices:</span> Agile/Scrum, Design Systems, WCAG Accessibility
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="featured-project">
            <div className="header-container">
              <h3 className="fade-in">Featured Client Work</h3>
            </div>
            <div className="section-container">
              <div className="two-cols">
                <a href="https://davidkausek.com" target="_blank" rel="noopener noreferrer">
                  <img src={projectImg} alt="WordPress website recently launched" className="project-img fade-in" />
                </a>
              </div>
              <div className="two-cols">
                <p className="fade-in">
                  Recently launched a WordPress site for a client.
                </p><br/>
                <p className="fade-in">
                  <strong>Live site:</strong> <a href="https://davidkausek.com" target="_blank" rel="noopener noreferrer">https://davidkausek.com</a>
                </p>
                <ul className="fade-in--stagger">
                  <li className="fade-in" style={{ '--fade-delay': '0.1s' }}>
                    Created a custom block theme
                  </li>
                  <li className="fade-in">
                    Built page templates
                  </li>
                  <li className="fade-in">
                    Developed reusable block patterns
                  </li>
                  <li className="fade-in">
                    Configured global styles (typography, color system, block styling)
                  </li>
                  <li className="fade-in">
                    Wrote custom CSS for responsive behavior and edge cases
                  </li>
                  <li className="fade-in">
                    Selected, evaluated, and configured plugins
                  </li>
                  <li className="fade-in">
                    Planned information architecture and user flows
                  </li>
                  <li className="fade-in">
                    Delivered the site from concept through launch
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="experience">
            <div className="section-container">
              <div className="cv-header">
                <h2 className="fade-in">CV</h2>
              </div>
              <div>
                <h3 className="fade-in">Professional experience</h3>
              </div>
              <div>
                <h5 className="fade-in">Web Producer / Front-End Developer (Software Engineer; Contract via Infinite Computer Solutions)</h5>
                <p className="fade-in"><em>2023 – 2026</em></p>
                <p className="fade-in">
                  <span>IBM:</span> Served as Squad Leader for a team of 4 responsible for the ongoing development and upkeep of an enterprise documentation platform used across IBM.com, coordinating sprint commitments, managing the squad backlog, and providing squad updates in larger team calls.
                </p>
                <ul className="fade-in--stagger">
                  <li className="fade-in"><strong>Managed Jira sprint commitments</strong> and technical task workflows for the team.</li>
                  <li className="fade-in">Led the rebuild and expansion of an existing reference library for 89 custom AEM components using content and assets provided by the UX team, personally <strong>building ~40% of the 200+ MDX documentation pages</strong>.</li>
                  <li className="fade-in"><strong>Created and maintained AEM authoring, publishing, and translation documentation</strong> to support consistent content delivery across sites.</li>
                  <li className="fade-in">Maintained high code quality as part of a two-person senior review team, <strong>managing final Pull Request (PR) approvals and production release cycles</strong>.</li>
                  <li className="fade-in"><strong>Mentored one junior developer</strong> and provided ongoing technical guidance and code reviews.</li>
                  <li className="fade-in">Used HTML, CSS, JavaScript, GitHub, Figma, and Airtable to build and maintain web content; <strong>received stakeholder and peer kudos for responsiveness and quality.</strong></li>
                </ul>
              </div>

              <div>
                <h5 className="fade-in">Web Content Manager/Developer (Contract via Morningview Technologies Inc)</h5>
                <p className="fade-in"><em>2012 – 2023</em></p>
                <p className="fade-in">
                  <span>IBM:</span> Developed and maintained internal and external IBM web properties across multiple CMS platforms, including custom CMS, WCM, Drupal, and Adobe Experience Manager.
                </p>
                <ul className="fade-in--stagger">
                  <li className="fade-in"><strong>Created and maintained 400+ high‑traffic pages</strong> in Adobe Experience Manager, using templates and reusable components in the AEM authoring environment to deliver a consistent, on‑brand experience across multiple sites.</li>
                  <li className="fade-in"><strong>Managed multilingual content</strong> in AEM and other enterprise CMS platforms, creating language master pages for translation, localized pages, and performing responsive QA on translated content.</li>
                  <li className="fade-in"><strong>Used AEM Launch to prototype page updates</strong> without affecting the published version, allowing stakeholders to review and approve content changes before release.</li>
                  <li className="fade-in"><strong>Chaired bi-monthly developer calls</strong>, managing meeting logistics, setting agendas, facilitating discussions, and maintaining shared recordings and documentation to standardize AEM authoring procedures and share technical insights across production teams.</li>
                  <li className="fade-in"><strong>Migrated legacy sites from Drupal and other platforms into AEM</strong>, preserving branding, content accuracy, and SEO structure throughout the transition.</li>
                  <li className="fade-in">Supported <strong>accessibility and quality standards</strong> across <strong>enterprise web properties</strong>.</li>
                  <li className="fade-in"><strong>Served as Discipline Lead for the Hybrid Cloud production pool</strong>, mentoring developers and resolving challenging technical issues.</li>
                </ul>
              </div>

              <div>
                <h5 className="fade-in">Senior Web Designer/Developer</h5>
                <p className="fade-in"><em>2008 – 2012</em></p>
                <p className="fade-in">
                  <span>LicenseStream:</span> Led UI development, front-end design, and digital asset production for an ASP.NET-based licensing platform.
                </p>
                <ul className="fade-in--stagger">
                  <li className="fade-in"><strong>Engineered interactive interfaces</strong> using XHTML, HTML5, and jQuery and built production-ready assets for ASP.NET backend integration.</li>
                  <li className="fade-in"><strong>Implemented modular CSS architectures</strong> using LESS and CSS3 frameworks to ensure site scalability.</li>
                  <li className="fade-in">Optimized web multimedia and <strong>managed cross-browser testing</strong> in an Agile environment.</li>
                </ul>
              </div>

              <div>
                <h5 className="fade-in">XHTML/CSS Web Designer</h5>
                <p className="fade-in">
                  <em>2008</em><br />
                  <span>Pere Partnership:</span> Partnered with designers/developers to translate PHP mockups into pixel-perfect XHTML/CSS and refactored legacy code for performance.
                </p>
              </div>

              <div>
                <h5 className="fade-in">Web Assets Producer (Consultant; Contractual)</h5>
                <p className="fade-in">
                  <em>2007 – 2008</em><br />
                  <span>WebMD:</span> Built pixel-perfect promo sites and HTML emails from Photoshop using XHTML, CSS, and JS; integrated third-party Flash assets and performed extensive QA.
                </p>
              </div>

              <div>
                <h5 className="fade-in">Associate Producer</h5>
                <p className="fade-in">
                  <em>2006 – 2007</em><br />
                  <span>WebMD:</span> Built promotional sites using XHTML/CSS and Photoshop; developed a regular-expression-based code library to streamline team workflows and managed CMS publishing.
                </p>
              </div>
            </div>
          </section>

          <section id="edu">
            <div className="section-container">
              <h3 className="fade-in">Education</h3>
              <p className="fade-in">
                <strong>SUNY Purchase</strong> | B.A. in New Media | Purchase, NY
              </p>
              <p className="fade-in">
                <strong>High School of Art & Design</strong> | Illustration | New York, NY
              </p>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => (
  <>
    <title>Sheryl Morgan Kausek: Senior AEM Content Author, Enterprise CMS, Technical Web Producer</title>
    <meta name="description" content="Sheryl Morgan Kausek is a NYC-based senior AEM content author and front-end web developer who maintains enterprise and multilingual websites." />
  </>
)

// Step 3: Export your component
export default IndexPage