import React from "react";
import { Link } from "react-router-dom";
import Testimonials from "./Testimonials/Testimonials";

import intro from "../../images/intro.png";
import productive from "../../images/productive.png";
import arrow from "../../images/arrow.svg";
import anywhere from "../../images/anywhere.svg";
import security from "../../images/security.svg";
import collaboration from "../../images/collaboration.svg";
import file from "../../images/file.svg";

export default function Body() {
  return (
    <div className="body-wrapper">
      <div>
        <section className="introduction">
          <div>
            <img src={intro} alt="Introduction" className="intro" />
          </div>
          <div className="introduction_text_container">
            <div className="introduction_text_container_heading">
              <p>All your files in one secure location, accessible anywhere.</p>
            </div>
            <div className="introduction_text_container_heading_children">
              <p>
                Fylo stores all your most important files in one secure
                location.
              </p>
              <p>Access them wherever you need, share and collaborate with </p>
              <p>friends family, and co-workers.</p>
            </div>
            <button className="introduction_text_container_heading_children_btn">
              Get Started
            </button>
          </div>
        </section>

        <section className="mobile_section">
          <aside className="accessandsecurity">
            <div className="accessandsecurity_div_1">
              <section className="accessandsecurity_div">
                <img
                  src={anywhere}
                  alt="Icon Access Anywhere"
                  className="img"
                />
                <div className="file">
                  <h2 className="file_heading">Access your files, anywhere</h2>
                  <p className="file_heading_body">
                    The ability to use a smartphone, tablet, or computer to
                    access your account means your files follow you everywhere.
                  </p>
                </div>
              </section>
              <section className="accessandsecurity_div_1_child">
                <img src={collaboration} alt="collaboration" className="img" />
                <div className="file">
                  <h2 className="file_heading"> Real-time collaboration</h2>
                  <p className="file_heading_body">
                    Securely share files and folders with friends, family and
                    colleagues for live collaboration. No email attachments
                    required.
                  </p>
                </div>
              </section>
            </div>
            <div className="accessandsecurity_div_1">
              <section className="accessandsecurity_div">
                <img src={security} alt="Security" className="img" />
                <div className="file">
                  <h2 className="file_heading">Security you can trust</h2>
                  <p className="file_heading_body">
                    2-factor authentication and user-controlled encryption are
                    just a couple of the security features we allow to help
                    secure your files.
                  </p>
                </div>
              </section>
              <section className="store">
                <img src={file} alt="Store your files" className="img" />
                <div className="file">
                  <h2 className="file_heading">Store any type of file</h2>
                  <p className="file_heading_body">
                    Whether you're sharing holidays photos or work documents,
                    Fylo has you covered allowing for all file types to be
                    securely stored and shared.
                  </p>
                </div>
              </section>
            </div>
          </aside>

          <aside className="productive_section">
            <div>
              <img
                src={productive}
                alt="Illustration Stay Productive"
                className="productive"
              />
            </div>
            <div className="productive_section_div">
              <h2 className="productive_section_div_header">
                Stay productive,
                <br /> wherever you are
              </h2>
              <p className="productive_section_div_header_textsection">
                Never let location be an issue when accessing your files. Fylo
                has you covered for all of your file storage needs.
              </p>
              <p className="productive_section_div_header_textsection">
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required.
              </p>
              <Link to="/SignUp" className="fyloLink">
                See how Fylo works
                <img src={arrow} alt="Arrow" className="fyloLink_arrow" />
              </Link>
            </div>
          </aside>
          <Testimonials />
        </section>
      </div>
    </div>
  );
}
