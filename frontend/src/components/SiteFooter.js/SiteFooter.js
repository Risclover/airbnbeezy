import React from "react";
import { RiGitRepositoryFill } from "react-icons/ri";
import "./SiteFooter.css";

export default function SiteFooter() {
  return (
    <div className="site-footer">
      <div className="site-footer-left">© 2023 Sara Dunlop</div>
      <div className="site-footer-right">
        <ul className="developer-links">
          <li className="tooltip">
            {" "}
            <span className="tooltiptext">Code Repository</span>
            <a
              className="developer-link"
              target="_blank"
              href="https://github.com/Risclover/airbnbeezy"
            >
              <RiGitRepositoryFill />
            </a>
          </li>
          <li className="tooltip">
            <span className="tooltiptext">Developer Portfolio</span>
            <a
              className="developer-link"
              target="_blank"
              href="https://risclover.github.io"
            >
              <i className="fa-solid fa-laptop-code"></i>
            </a>
          </li>
          <li className="tooltip">
            <span className="tooltiptext">Github</span>
            <a
              className="developer-link"
              target="_blank"
              href="https://github.com/Risclover"
            >
              <i className="devicon-github-original"></i>
            </a>
          </li>
          <li className="tooltip">
            <span className="tooltiptext">LinkedIn</span>
            <a
              className="developer-link"
              target="_blank"
              href="https://www.linkedin.com/in/sara-dunlop"
            >
              <i className="devicon-linkedin-plain"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
