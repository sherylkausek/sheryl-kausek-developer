// Step 1: Import React
import * as React from 'react'
import SiteFooter from '../components/footer'
import profileImg from '../images/smk-profile.png'
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
            <li><a href="#experience" aria-label="CV">CV</a></li>
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
                  Technical Web Producer | Front-End Developer | Enterprise CMS (AEM &amp; Drupal)
                </h2>
                <p className="fade-in fade-in--on-load" style={{ '--fade-delay': '0.15s' }}>
                  <strong>Web Producer / Front-End Developer</strong> with 20 years of experience designing, building, and maintaining responsive websites across enterprise and CMS-driven environments, including 13 years supporting <strong>IBM</strong>'s digital ecosystem and earlier digital asset production experience at <strong>WebMD</strong>. Experienced in web content production, CMS authoring, and front-end development across AEM, Drupal, WordPress, and Gatsby/MDX platforms. Trusted release authority skilled in translating content and design requirements into high-quality digital experiences through component-based systems, rigorous QA, and cross-functional collaboration.
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
                    <span>CMS Administration &amp; Content Ops:</span> Enterprise page authoring across AEM and Drupal; end-to-end WordPress theming and full-site builds
                  </li>
                  <li className="fade-in">
                    <span>Web Production &amp; Component Build:</span> Figma spec review, Figma design-to-code translation, component mapping, implementation support (design → UI)
                  </li>
                  <li className="fade-in">
                    <span>Release Governance &amp; QA:</span> Staging and production launch management, strict code reviews, and cross-browser quality assurance tracking
                  </li>
                  <li className="fade-in">
                    <span>Process Standardization:</span> Authoring technical guides, SOPs, training playbooks, and onboarding documentation to eliminate bottlenecks
                  </li>
                  <li className="fade-in">
                    <span>Project Management &amp; Accessibility:</span> Jira/Airtable workflow optimization, technical SEO structure mapping, and WCAG accessibility compliance
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
                    <span>Frameworks &amp; Libraries:</span> Gatsby, Bootstrap, MDX
                  </li>
                  <li className="fade-in">
                    <span>Content Platforms:</span> WordPress (theming, full-site builds); AEM, Drupal (content authoring)
                  </li>
                  <li className="fade-in">
                    <span>Tools &amp; Workflows:</span> Figma, Git, GitHub
                  </li>
                  <li className="fade-in">
                    <span>Practices:</span> Agile/Scrum, Design Systems
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
                <h5 className="fade-in">Technical Web Producer (Software Engineer; Contract via Infinite Computer Solutions)</h5>
                <p className="fade-in"><em>2023 – 2026</em></p>
                <p className="fade-in">
                  <span>IBM:</span> Directed a 4-person production squad managing an enterprise IBM.com documentation platform, resulting in optimized architecture, navigability, and site health.
                </p>
                <ul className="fade-in--stagger">
                  <li className="fade-in"><strong>Managed Jira sprint commitments</strong> and technical task workflows for the team.</li>
                  <li className="fade-in"><strong>Built ~40% of 200+ MDX documentation pages</strong> from UX-provided content and assets, creating reference materials for 89 custom AEM components that enabled more consistent authoring across design and web production teams.</li>
                  <li className="fade-in"><strong>Co-managed production release cycles</strong> on a two-person senior governance team with final authority over PR approvals, code quality, and deployments.</li>
                  <li className="fade-in"><strong>Scaled content operations and self-service</strong> by training non-technical stakeholders on Git workflows and maintaining AEM publishing guides to accelerate delivery timelines.</li>
                  <li className="fade-in"><strong>Mentored junior team members</strong> and provided ongoing technical guidance and code reviews, earning stakeholder and peer recognition for high responsiveness and delivery quality.</li>
                </ul>
              </div>

              <div>
                <h5 className="fade-in">Web Content Manager/Developer (Contract via Morningview Technologies Inc)</h5>
                <p className="fade-in"><em>2012 – 2023</em></p>
                <p className="fade-in">
                  <span>IBM:</span> Developed, launched, and maintained cross-functional internal and external web properties across enterprise Drupal, custom CMS, and Adobe Experience Manager (AEM) ecosystems.
                </p>
                <ul className="fade-in--stagger">
                  <li className="fade-in"><strong>Executed multi-phase migrations of ~400 pages</strong> from legacy setups to Drupal, and subsequently into AEM while maintaining brand guidelines and SEO continuity.</li>
                  <li className="fade-in"><strong>Utilized AEM Launches to prototype and stage complex page updates</strong>, effectively eliminating deployment risk and accelerating time-to-market through structured stakeholder review cycles.</li>
                  <li className="fade-in"><strong>Chaired bi-monthly developer calls</strong> following a major production team restructuring, setting agendas and documentation to standardize AEM authoring procedures across cross-functional pools.</li>
                  <li className="fade-in"><strong>Served as Discipline Lead for the Hybrid Cloud production pool</strong>, managing resource assignments, mentoring front-end developers, and resolving advanced technical blockers.</li>
                  <li className="fade-in"><strong>Enforced enterprise digital accessibility (WCAG) and quality standards</strong> across all live web properties to guarantee responsive and cross-device consistency.</li>
                </ul>
              </div>

              <div>
                <h5 className="fade-in">Senior Web Designer/Developer</h5>
                <p className="fade-in"><em>2008 – 2012</em></p>
                <p className="fade-in">
                  <span>LicenseStream:</span> Led UI development, front-end design, and digital asset production for an ASP.NET-based licensing platform.
                </p>
                <ul className="fade-in--stagger">
                  <li className="fade-in"><strong>Engineered interactive interfaces</strong> using XHTML, HTML5, and jQuery, delivering production-ready visual assets optimized for seamless backend developer integration.</li>
                  <li className="fade-in"><strong>Established modular CSS architecture</strong> using LESS and CSS3 frameworks to ensure site scalability.</li>
                  <li className="fade-in"><strong>Managed cross-browser quality assurance (QA)</strong> and web multimedia optimization within a fast-paced, Agile production environment.</li>
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
                  <span>WebMD:</span> Produced pixel-perfect promotional sites and HTML emails from design files using XHTML, CSS, and JS; integrated third-party Flash assets and performed extensive QA.
                </p>
              </div>

              <div>
                <h5 className="fade-in">Associate Producer</h5>
                <p className="fade-in">
                  <em>2006 – 2007</em><br />
                  <span>WebMD:</span> Produced promotional sites using XHTML/CSS and Photoshop; developed a RegEx-based code library to streamline team workflows and managed CMS publishing.
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
    <title>Sheryl Morgan Kausek: Technical Web Producer, Front-End Developer, Enterprise CMS (AEM & Drupal)</title>
    <meta name="description" content="Sheryl Morgan Kausek is a NYC based front-end web developer." />
  </>
)

// Step 3: Export your component
export default IndexPage