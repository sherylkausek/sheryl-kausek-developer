// Step 1: Import React
import * as React from 'react'
import SiteFooter from '../components/footer'
import profileImg from '../images/smk-profile.png'

// Step 2: Define your component
function IndexPage() {
  return (
    <>
      <main>
        <div class="hero">
          <section class="innerHero">
            <h1>Sheryl Morgan Kausek</h1>
          </section>
        </div>

        <div class="content">
          <section id="intro">
            <div class="section-container">
              <img src={profileImg} alt="Sheryl Morgan Kausek" class="profile-pic" />
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
                  <li><span>Content Platforms:</span> WordPress (theming, full-site builds); AEM, Drupal (contentauthoring)</li>
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
                <p><em>Feb 2023 – Mar 2026 | New York, NY</em></p>
                <p>
                  <span>IBM:</span> Led a squad responsible for the ongoing development of an inherited documentation platform used across various IBM.com teams; optimized site structure, navigability, and health of its enterprise codebase.
                </p>
                <ul>
                  <li><strong>Coordinated the team-wide restructuring</strong> of 200+ MDX-integrated pages, contributing hands-on to a substantial portion while guiding squad progress and ensuring file, directory, and path updates maintained site health.  </li>
                  <li><strong>Led the squad-level creation of a comprehensive AEM component library rebuild</strong> serving as technical documentation for custom components; personally built about 40% of the pages, coordinated with team members, and ensured consistent adherence to enterprise design system standards.  </li>
                  <li><strong>Empowered non-technical stakeholders</strong> by teaching Git workflows (forking, branching, and MDX editing), reducing team bottlenecks and enabling contributions.  </li>
                  <li><strong>Maintained high code quality</strong> as part of a two-person senior review team, managing final <strong>Pull Request (PR) approvals</strong> and production release cycles.  </li>
                  <li><strong>Facilitated Agile delivery</strong> by driving sprint planning in Jira and backlog grooming for my squad; leveraged <strong>Copilot</strong> to draft detailed user stories and technical requirements, ensuring on-time delivery of documentation milestones.</li>
                </ul>
              </div>

              <div>
                <h5>Web Content Manager/Developer (Contract via Morningview Technologies Inc)</h5>
                <p><em>Jul 2012 – Feb 2023 | New York, NY</em></p>
                <p>
                  <span>IBM:</span> Developed and maintained internal and external IBM web properties across four platform generations (Custom CMS, WCM, Drupal 8, and AEM), ensuring high-traffic sites met enterprise front-end and accessibility standards.
                </p>
                <ul>
                  <li><strong>Served as Discipline Lead for the Hybrid Cloud production pool</strong>, mentoring developers and resolving challenging technical issues.  </li>
                  <li><strong>Chaired bi-monthly developer calls</strong>, managing agendas and documentation to standardize procedures and share technical insights across cross-functional production teams.  </li>
                  <li><strong>Collaborated with the PMO to track developer progress</strong>, identifying new feature requirements and opening work tickets to align engineering output with project milestones.  </li>
                  <li>Ported legacy sites and migrated existing content into new enterprise systems while maintaining <strong>content integrity, SEO performance, and brand consistency</strong>.</li>
                </ul>
              </div>

              <div>
                <h5>Senior Web Designer/Developer</h5>
                <p><em>Jul 2008 – Mar 2012 | New York, NY</em></p>
                <p>
                  <span>LicenseStream:</span> Led UI development and front-end design for an ASP.NET-based licensing platform.
                </p>
                <ul>
                  <li><strong>Engineered interactive interfaces</strong> using XHTML, HTML5, and jQuery and built production-ready assets for <strong>ASP.NET backend integration</strong>.  </li>
                  <li><strong>Implemented modular CSS architectures</strong> using <strong>LESS</strong> and CSS3 frameworks to ensure site scalability.  </li>
                  <li><strong>Optimized web multimedia</strong> and managed cross-browser testing in an Agile environment.</li>
                </ul>
              </div>

              <div>
                <h5>XHTML/CSS Web Designer</h5>
                <p>
                  <em>Mar 2008 – Jun 2008 | New York, NY</em><br />
                  <span>Pere Partnership:</span> Partnered with designers/developers to translate PHP mockups into pixel-perfect XHTML/CSS and refactored legacy code for performance.
                </p>
              </div>

              <div>
                <h5>Consultant (Contractual)</h5>
                <p>
                  <em>Nov 2007 – Mar 2008 | New York, NY</em><br />
                  <span>WebMD:</span> Built pixel-perfect promo sites and HTML emails from Photoshop using XHTML, CSS, and JS; integrated third-party Flash assets and performed extensive QA.
                </p>
              </div>

              <div>
                <h5>Associate Producer</h5>
                <p>
                  <em>Sep 2006 – Nov 2007 | New York, NY</em><br />
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
    <title>Sheryl Morgan Kausek: Web Producer / Front-End Developer / CMS Author</title>
    <meta name="description" content="Sheryl Morgan Kausek is a NYC based front-end web developer." />
  </>
)

// Step 3: Export your component
export default IndexPage