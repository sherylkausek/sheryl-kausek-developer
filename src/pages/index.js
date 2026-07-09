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
        <div id="menuItems" class="menu-items" style={{ display: "none" }}>
          <span class="close-menu" role="button" tabIndex={0} onClick={() => {
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
        <div class="hero">
          <section class="innerHero">
            <div class="mobile-menu">
              <MobileMenu color="white" size={32} />
            </div>
            <div class="hover hover-1"></div>
            <div class="hover hover-2"></div>
            <div class="hover hover-3"></div>
            <div class="hover hover-4"></div>
            <div class="hover hover-5"></div>
            <div class="hover hover-6"></div>
            <div class="hover hover-7"></div>
            <div class="hover hover-8"></div>
            <div class="hover hover-9"></div>
            <h1 aria-label="Sheryl Morgan Kausek">Sheryl Morgan Kausek</h1>
          </section>
        </div>

        <div class="content">
          <section id="intro">
            <div class="section-container">
              <img src={profileImg} alt="Image of Sheryl Morgan Kausek" class="profile-pic" />
              <div class="info-wrapper">
                <h2>Web Producer | Front-End Developer | CMS Author</h2>
                <p>Web Developer with 13+ years of experience delivering high-impact web solutions within the IBM ecosystem. Combines deep technical expertise in front-end development (HTML, CSS, JavaScript) with extensive page authoring and administration across diverse platforms, including AEM, Drupal and MDX-driven Gatsby sites. Trusted release authority and technical mentor skilled at optimizing content lifecycles, governing quality standards, and streamlining operational workflows using modern tooling and AI-assisted processes.</p>
              </div>
            </div>
          </section>

          <section id="tech-skills">
            <div class="section-container">
              <div class="two-cols">
                <h3>Core competencies</h3>
                <ul>
                  <li><span>CMS Administration &amp; Content Ops:</span> AEM &amp; Drupal (page authoring &amp; administration), WordPress (theming &amp; full-site builds)</li>
                  <li><span>Web Production &amp; Component Build:</span> spec review, component mapping, implementation support (design → UI)</li>
                  <li><span>Quality Assurance &amp; Launch Governance:</span> staging/production checks, HTML/CSS review, cross‑browser testing</li>
                  <li><span>Process &amp; Onboarding:</span> authoring guides, playbooks, SOPs</li>
                  <li><span>Workflow & SEO Execution:</span> Jira, Airtable, metadata optimization, semantic structure, WCAG compliance</li>
                </ul>
              </div>
              <div class="two-cols">
                <h3>Technology skills</h3>
                <ul>
                  <li><span>Front-end:</span> HTML5, CSS3, SCSS, Responsive Design, JavaScript (ES6+)</li>
                  <li><span>Frameworks &amp; Libraries:</span> Gatsby, Bootstrap, MDX</li>
                  <li><span>Content Platforms:</span> WordPress (theming, full-site builds); AEM, Drupal (content authoring)</li>
                  <li><span>Tools &amp; Workflows:</span> Figma, Git, GitHub, CI/CD (GitHub Actions)</li>
                  <li><span>Practices:</span> Agile/Scrum, Design Systems</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="experience">
            <div class="section-container">
              <div class="cv-header">
                <h2>CV</h2>
              </div>
              <div>
                <h3>Professional experience</h3>
              </div>
              <div>
                <h5>Software Engineer (Contract via Infinite Computer Solutions)</h5>
                <p><em>2023 – 2026</em></p>
                <p>
                  <span>IBM:</span> Directed a 4-person web production squad managing an enterprise documentation platform across IBM.com, directly improving site architecture, content navigability, and overall platform health.
                </p>
                <ul>
                  <li><strong>Produced a production library by building ~40% of 200+ MDX pages</strong> using content and assets provided by the UX team. This work supported AEM authors, designers, and stakeholders by delivering clear references for 89 custom AEM components.</li>
                  <li><strong>Co-managed production release cycles</strong> as part of a two-person senior governance team, sharing final authority for pull request (PR) approvals, code quality, and deployment schedules.</li>
                  <li><strong>Scaled content operations and self-service</strong> by training non-technical stakeholders on Git workflows (forking, branching, MDX editing) and maintaining AEM publishing and translation guides to eliminate production bottlenecks.</li>
                  <li><strong>Mentored junior team members</strong> and provided ongoing technical guidance and code reviews, earning stakeholder and peer recognition for high responsiveness and delivery quality.</li>
                  <li><strong>Facilitated Agile delivery</strong> by driving sprint planning in Jira and backlog grooming for my squad; leveraged Copilot to draft detailed user stories and technical requirements, ensuring on-time delivery of documentation milestones.</li>
                </ul>
              </div>

              <div>
                <h5>Web Content Manager/Developer (Contract via Morningview Technologies Inc)</h5>
                <p><em>2012 – 2023</em></p>
                <p>
                  <span>IBM:</span> Developed, launched, and maintained cross-functional internal and external web properties across enterprise Drupal, custom CMS, and Adobe Experience Manager (AEM) ecosystems.
                </p>
                <ul>
                  <li><strong>Executed multi-phase migrations of ~400 pages</strong> from legacy setups to Drupal, and subsequently into AEM while maintaining brand guidelines cand SEO continuity.</li>
                  <li><strong>Utilized AEM Launches to prototype and stage complex page updates</strong>, effectively eliminating deployment risk and accelerating time-to-market through structured stakeholder review cycles.</li>
                  <li><strong>Chaired bi-monthly developer calls</strong> following a major production team restructuring, setting agendas and documentation to standardize AEM authoring procedures across cross-functional pools.</li>
                  <li><strong>Served as Discipline Lead for the Hybrid Cloud production pool</strong>, managing resource assignments, mentoring front-end developers, and resolving advanced technical blockers.</li>
                  <li><strong>Enforced enterprise digital accessibility (WCAG) and quality standards</strong> across all live web properties to guarantee responsive and cross-device consistency.</li>
                </ul>
              </div>

              <div>
                <h5>Senior Web Designer/Developer</h5>
                <p><em>2008 – 2012</em></p>
                <p>
                  <span>LicenseStream:</span> Led UI development, front-end design, and digital asset production for an ASP.NET-based licensing platform.
                </p>
                <ul>
                  <li><strong>Engineered interactive interfaces</strong> using XHTML, HTML5, and jQuery, delivering production-ready visual assets optimized for seamless backend developer integration.</li>
                  <li><strong>Established modular CSS architecture</strong> using LESS and CSS3 frameworks to ensure site scalability.</li>
                  <li><strong>Managed cross-browser quality assurance (QA)</strong> and web multimedia optimization within a fast-paced, Agile production environment.</li>
                </ul>
              </div>

              <div>
                <h5>XHTML/CSS Web Designer</h5>
                <p>
                  <em>2008</em><br />
                  <span>Pere Partnership:</span> Partnered with designers/developers to translate PHP mockups into pixel-perfect XHTML/CSS and refactored legacy code for performance.
                </p>
              </div>

              <div>
                <h5>Consultant (Contractual)</h5>
                <p>
                  <em>2007 – 2008</em><br />
                  <span>WebMD:</span> Built pixel-perfect promo sites and HTML emails from Photoshop using XHTML, CSS, and JS; integrated third-party Flash assets and performed extensive QA.
                </p>
              </div>

              <div>
                <h5>Associate Producer</h5>
                <p>
                  <em>2006 – 2007</em><br />
                  <span>WebMD:</span> Produced promotional sites using XHTML/CSS and Photoshop; developed a RegEx-based code library to streamline team workflows and managed CMS publishing.
                </p>
              </div>
            </div>
          </section>

          <section id="edu">
            <div class="section-container">
              <h3>Education</h3>
              <p>
                <strong>SUNY Purchase</strong> | B.A. in New Media | Purchase, NY
              </p>
              <p>
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
    <title>Sheryl Morgan Kausek: Web Producer, Front-End Developer, CMS Author</title>
    <meta name="description" content="Sheryl Morgan Kausek is a NYC based front-end web developer." />
  </>
)

// Step 3: Export your component
export default IndexPage