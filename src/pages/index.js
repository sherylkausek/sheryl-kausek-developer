// Step 1: Import React
import * as React from 'react'
import SiteFooter from '../components/footer'
import '../styles/styles.css'

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
            <h2>Front-End Developer & Squad Lead</h2>
            <p>13+ years delivering high-impact web solutions within the IBM ecosystem. Developed enterprise web pages and navigation components through multiple approaches: CMS platforms (AEM, Drupal, custom), MDX within Gatsby, and hand-coded HTML, CSS, and JavaScript. Trusted release authority and technical mentor, streamlining team workflows with modern tooling, including AI-assisted processes.</p>
          </section>

          <hr />

          <section id="tech-skills">
            <h3>Technology skills</h3>
            <ul>
              <li><span>Front-end:</span> HTML5, CSS3, responsive design, JavaScript (ES6+)</li>
              <li><span>Frameworks &amp; Libraries:</span> React, Bootstrap, Gatsby, MDX, jQuery</li>
              <li><span>Content Platforms:</span> Adobe Experience Manager (AEM), Drupal, WordPress</li>
              <li><span>Tools &amp; Workflow:</span> Git, GitHub, Docker, CI/CD, Figma</li>
              <li><span>Practices:</span> Agile/Scrum, Design Systems, Technical Mentorship, AI-assisted workflows</li>
            </ul>
          </section>

          <hr />
          <div>
            <h2>CV</h2>
          </div>

          <section id="experience">
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

          </section>

          <hr />

          <section id="edu">
            <h3>Education</h3>
            <p>
              <strong>SUNY Purchase</strong> | B.A. in New Media | Purchase, NY
            </p>
            <p>
              <strong>High School of Art & Design</strong> | Illustration | New York, NY
            </p>
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
    <title>Sheryl Morgan Kausek | Front-end Web Dev</title>
    <meta name="description" content="Sheryl Morgan Kausek is a NYC based front-end web developer." />
  </>
)

// Step 3: Export your component
export default IndexPage