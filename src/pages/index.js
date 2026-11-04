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
                  Hi. I'm a <strong>Senior AEM Content Author</strong> with 20 years of web production experience, including more than 13 years supporting <strong>IBM</strong>'s digital ecosystem. I've created and maintained over 400 pages in Adobe Experience Manager (AEM), with additional experience in Drupal, WordPress, custom CMS platforms, and Gatsby/MDX. My front-end background in HTML, CSS, and JavaScript helps me troubleshoot issues, refine layouts, and bridge the gap between content authoring and development.
                </p>
                <p className="fade-in fade-in--on-load" style={{ '--fade-delay': '0.15s' }}>
                  I'm experienced in translating Figma designs into production-ready AEM pages using existing components and templates. I've also expanded my skills through hands-on projects with AEM Edge Delivery Services (EDS), including block-based authoring and the Universal Editor. My work emphasizes responsive QA, accessibility, and publishing workflows, and I enjoy collaborating with designers, writers, developers, and stakeholders to deliver polished, functional web experiences.
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
                    <span>AEM Content Authoring & CMS Management:</span> Creating, updating, and maintaining enterprise websites in Adobe Experience Manager (AEM Sites), managing multilingual content, and working with AEM Edge Delivery Services (EDS)
                  </li>
                  <li className="fade-in">
                    <span>Figma Design Implementation:</span> Turning Figma designs into responsive AEM pages using existing components and templates
                  </li>
                  <li className="fade-in">
                    <span>Publishing, Releases &amp; Quality Assurance:</span> Managing content publishing, coordinating releases, reviewing code changes, and testing pages across devices and screen sizes
                  </li>
                  <li className="fade-in">
                    <span>Documentation, Workflows &amp; Accessibility:</span> Writing authoring guides and technical documentation, tracking work in Jira and Airtable, and following SEO and WCAG accessibility best practices
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
                    <span>Collaboration &amp; Workflows:</span> Figma, Git, GitHub, Jira, Airtable
                  </li>
                  <li className="fade-in">
                    <span>AI Tools:</span> Microsoft Copilot, ChatGPT
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
                  Designed, developed, and launched a custom WordPress website for a client.
                </p><br/>
                <p className="fade-in">
                  <strong>Live site:</strong> <a href="https://davidkausek.com" target="_blank" rel="noopener noreferrer">https://davidkausek.com</a>
                </p>
                <ul className="fade-in--stagger">
                  <li className="fade-in" style={{ '--fade-delay': '0.1s' }}>
                    Built a custom WordPress block theme with reusable page templates and patterns
                  </li>
                  <li className="fade-in">
                    Created a consistent design system for typography, colors, and page layouts
                  </li>
                  <li className="fade-in">
                    Wrote custom CSS to ensure pages display correctly across screen sizes
                  </li>
                  <li className="fade-in">
                    Selected and configured plugins to support site functionality
                  </li>
                  <li className="fade-in">
                    Organized site content and navigation to make information easy to find
                  </li>
                  <li className="fade-in">
                    Managed the project from initial concept through launch
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
                  <span>IBM</span>
                </p>
                <ul className="fade-in--stagger">
                  <li className="fade-in">Led the rebuild and expansion of a reference library explaining how to use 89 custom AEM components. Used content and assets from the UX team and personally built about 40% of the 200+ MDX documentation pages.</li>
                  <li className="fade-in">Wrote and updated guides for AEM authoring, publishing, and translation to help content authors follow consistent publishing practices.</li>
                  <li className="fade-in">Led a team of four maintaining a documentation website used across IBM.com. Planned sprint work, managed the team's backlog, and shared progress in team calls.</li>
                  <li className="fade-in">Worked with another senior reviewer to check code, give final approval on pull requests, and manage releases to the live site.</li>
                  <li className="fade-in">Mentored one junior developer and provided ongoing technical guidance.</li>
                  <li className="fade-in">Built and maintained web content using HTML, CSS, JavaScript, GitHub, Figma, and Airtable. Received praise from colleagues and stakeholders for responsive support and quality work.</li>
                </ul>
              </div>

              <div>
                <h5 className="fade-in">Web Content Manager/Developer (Contract via Morningview Technologies Inc)</h5>
                <p className="fade-in"><em>2012 – 2023</em></p>
                <p className="fade-in">
                  <span>IBM</span>
                </p>
                <ul className="fade-in--stagger">
                  <li className="fade-in">Checked web content for accuracy and accessibility, including image alt text, headings, links, formatting, metadata, and how pages displayed across devices.</li>
                  <li className="fade-in">Created and maintained more than 400 high-traffic AEM pages using existing templates and reusable components, keeping content and branding consistent across sites.</li>
                  <li className="fade-in">Managed content in multiple languages using AEM and other content management systems. Created language master pages for translation, built locale-specific live copy pages, and checked translated pages across screen sizes.</li>
                  <li className="fade-in">Used AEM Launch to prepare page updates separately from the publishable version so stakeholders could review and approve changes before release.</li>
                  <li className="fade-in">Led bi-monthly developer calls, organized meetings, set agendas, and kept recordings and notes to help production teams follow consistent AEM authoring practices and share technical guidance.</li>
                  <li className="fade-in">Moved sites from Drupal and other platforms into AEM while preserving branding, content accuracy, and SEO structure.</li>
                  <li className="fade-in">Served as Discipline Lead for the Hybrid Cloud production team, helping developers build their skills and solve technical problems.</li>
                </ul>
              </div>

              <div>
                <h5 className="fade-in">Senior Web Designer/Developer</h5>
                <p className="fade-in"><em>2008 – 2012</em></p>
                <p className="fade-in">
                  <span>ImageSpan</span>
                </p>
                <ul className="fade-in--stagger">
                  <li className="fade-in">Designed and built interactive website interfaces for an ASP.NET licensing platform using XHTML, HTML5, and jQuery, and worked with backend developers on integration.</li>
                  <li className="fade-in">Checked websites across browsers while working on multiple projects in an Agile team.</li>
                </ul>
              </div>

              <div>
                <h5 className="fade-in">XHTML/CSS Web Designer</h5>
                <p className="fade-in"><em>2008</em></p>
                <p className="fade-in">
                  <span>Pere Partnership</span>
                </p>
                <ul className="fade-in--stagger">
                  <li className="fade-in">Worked with designers and developers to turn PHP mockups into XHTML/CSS pages that matched the designs. Updated older code to improve performance.</li>
                </ul>
              </div>

              <div>
                <h5 className="fade-in">Web Assets Producer (Consultant; Contractual)</h5>
                <p className="fade-in"><em>2007 – 2008</em></p>
                <p className="fade-in">
                  <span>WebMD</span>
                </p>
                <ul className="fade-in--stagger">
                  <li className="fade-in">Built promotional websites and HTML emails from Photoshop designs using XHTML, CSS, and JavaScript. Added third-party Flash assets and tested the finished work.</li>
                </ul>
              </div>

              <div>
                <h5 className="fade-in">Associate Producer</h5>
                <p className="fade-in"><em>2006 – 2007</em></p>
                <p className="fade-in">
                  <span>WebMD</span>
                </p>
                <ul className="fade-in--stagger">
                  <li className="fade-in">Built promotional websites using XHTML/CSS and Photoshop and managed CMS publishing.</li>
                  <li className="fade-in">Created a reusable code library using regular expressions (RegEx) to make the team's work easier.</li>
                </ul>
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