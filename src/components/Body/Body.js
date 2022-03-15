import React from "react";
import { Link } from "react-router-dom";
import intro from "../../images/intro.png";
import productive from "../../images/productive.png";
import arrow from "../../images/arrow.svg";
import anywhere from "../../images/anywhere.svg";

export default function Body() {
  return (
    <div>
      <section>
          <div>
          <img src={intro} alt="Introduction" className="intro" />
          </div>
        <div>
          <p>All your files in one secure location,</p>
          <p> accessible anywhere. </p>
          <p>
            Fylo stores all your most important files in one secure location.</p>
          <p>Access them wherever you need, share and collaborate with </p>
          <p>friends family, and co-workers.</p>

          <button>Get Started</button>
        </div>
      </section>

      <section>
          <aside>
          <div>
              <section>
                  <img src={anywhere}
                  alt="Icon Access Anywhere"
                  className="anywhere" />
                  <p>Access your files, anywhere</p>
              </section>
          </div>
          <div></div>
          </aside>
          <aside>
              <div>
                  <img src={productive}
                  alt="Illustration Stay Productive"
                  className="productive" />
              </div>

              <div>
                  <p>Stay productive,wherever you are </p>
                      <p> Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
  storage needs.</p>

  <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email 
  attachments required.</p>
  <Link to="/Feature">See how Fylo works<img src={arrow} alt="Arrow"
  className="arrow"/></Link>

              </div>
          </aside>
      </section>
    </div>
  );
}
