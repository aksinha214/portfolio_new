import React, { useEffect } from 'react';

// Importing TagCloud for  3D Rotating Text Sphere
import TagCloud from 'TagCloud';

import '../../styles/Skill/Skill.scss';

const Skill = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    const container = '.tagcloud';
    let radii;

    // If 3D Text Sphere is not showing up after deployment remove the return (i.e, return() =>{}) function from below code
    return () => {
      const texts = [
        'HTML5',
        'CSS3',
        'Bootstrap',
        'JavaScript',
        'React',
        'Java',
        'Kotlin',
        'NodeJS',
        'C',
        'Jquery',
        'ES6',
        'GIT',
        'GITHUB',
        'MongoDB',
        'Android',
        '.NET C#',
        'Python',
        'Laravel',
        'PHP',
        'MySQL',
        'PostgreSQL',
        'JSP and Servlet',
        'SpringBoot',
      ];


      // Decrasing 'radius' value for small screen devices  
      function radiusValue() {
        if (window.screen.width <= 778) {
          radii = 150;
        } else {
          radii = 290;
        }
        return radii;
      }

      const options = {
        radius: radiusValue(),
        maxSpeed: 'normal',
        initSpeed: 'normal',
        keep: true,
      };

      TagCloud(container, texts, options);
    }
  }, []);
  return (
    <>
      <div className="skill">
        <div className="skill__main-container">
          <div className="skill__header" id="skill__heading">
            <h1>
              <span
                data-aos="fade-down"
                data-aos-delay="0"
                data-aos-offset="200"
              >
                S
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-offset="200"
              >
                K
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-offset="200"
              >
                I
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="600"
                data-aos-offset="200"
              >
                L
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="800"
                data-aos-offset="200"
              >
                L
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="1000"
                data-aos-offset="200"
              >
                S
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="1000"
                data-aos-offset="200"
              >
                .
              </span>
            </h1>
          </div>
          <div className="skill__inner-container">
            <div className="skill__info">
              <div className="skill__details-container">
                <div className="skill__details">
                  <h4>HTML / CSS</h4>
                  <ul>
                    <li>
                      <span>HTML5, CSS3, Bootstrap, Tailwinds, SCSS</span>
                    </li>
                    <li>
                      <span>
                        <b>Preprocessors:</b> PUG, SASS
                      </span>
                    </li>
                    <li>
                      <span>
                        <b>Modular:</b> BEM
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>JavaScript</h4>
                  <ul>
                    <li>
                      <span>
                        <b>Frameworks & Libraries:</b> &nbsp; React JS, React
                        Native, Express.js, Node.js
                      </span>
                    </li>
                    <li>
                      <span>Typescript, ES5/ES6, jQuery, Vite React</span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>Version Control Systems</h4>
                  <ul>
                    <li>
                      <span>GIT</span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>Business:</h4><span> Click to visit</span> 
                  <ul>
                    <li>
                      <span><a href="https://admin.shopify.com/store/f6abc0-f6" rel="noopener noreferrer" target="_blank">Shopify.com</a>, Shop App</span>
                    </li>
                    <li>
                      <span><a href="https://www.freelancer.in/u/azaysinha" rel="noopener noreferrer" target="_blank">Freelancer.in</a>, <a href="https://www.fiverr.com/ajayok/buying?source=avatar_menu_profile" rel="noopener noreferrer" target="_blank">Fiverr.com</a></span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>Server Side</h4>
                  <ul>
                    <li>
                      <span>Node.js, Express.js, MongoDB, MySQL, PostgreSQL</span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>Programming Language:</h4>
                  <ul>
                    <li>
                      <span>Java, Kotlin, C Language, Python, .Net C#</span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>Advance Java</h4>
                  <ul>
                    <li>
                      <span>JSP and Servlet <br/>SpringBoot</span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>Command Line Interface</h4>
                  <ul>
                    <li>
                      <span>Basic Linux Command</span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>AI - ML</h4>
                  <ul>
                    <li>
                      <span>AI Tools, Train and Test Model, AI algorithms, NUMPY, PANDAS, Python, so on...</span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>QA- Quality Assurance</h4>
                  <ul>
                    <li>
                      <span>Playwright - Microsoft </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3D Text Cloud  */}
            <div className="skill__cloud">
              <div className="tagcloud" data-aos="zoom-in-up" data-aos-offset="200"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
