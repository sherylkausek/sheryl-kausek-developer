import React from "react"
//import "../scripts/scripts.js"
import { useEffect } from 'react';

export default function SiteFooter() {
  useEffect(() => {
    // This runs only in the browser after the component is mounted
    const button = document.querySelector('.footerContact');
    const footer = document.querySelector('footer');
    const contactMe = document.querySelector('.contact-me');

    const updateMaxHeight = () => {
      if (!contactMe || !footer) return;
      if (footer.classList.contains('active')) {
        contactMe.style.maxHeight = `${contactMe.scrollHeight}px`;
      } else {
        contactMe.style.maxHeight = '0px';
      }
    };

    const handleToggle = () => {
      if (!footer || !contactMe) return;
      const opening = !footer.classList.contains('active');
      footer.classList.toggle('active');
      updateMaxHeight();

      if (opening) {
        // Wait until the height is applied before scrolling
        requestAnimationFrame(() => {
          setTimeout(() => {
            contactMe.scrollIntoView({ behavior: 'smooth', block: 'end' });
          }, 500);
        });
      }
    };

    if (contactMe) {
      contactMe.style.maxHeight = '0px';
    }

    if (button && footer) {
      button.addEventListener('click', handleToggle);
    }

    // Cleanup listener when component unmounts to prevent memory leaks
    return () => {
      if (button) button.removeEventListener('click', handleToggle);
    };
  }, []);

  return (
    <footer>
        <section id="footer">
          <button className="footerContact">Contact me</button>
          <div className="contact-me">
            <form action="https://sheryl.kausek.com/forms/process.php" method="post">
            <input type="hidden" name="form_tools_form_id" value="4" />
            <input type="email" name="email" placeholder="Your email" />
            <textarea name="message" placeholder="Your message"></textarea>
            <select name="found_me">
              <option value="" selected disabled hidden>How did you find me?</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Referral">Referral</option>
              <option value="Other">Other</option>
            </select>
            <button type="submit">Submit</button>
          </form>
          </div>
        </section>
    </footer>
  )
}