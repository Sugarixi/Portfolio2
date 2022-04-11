import React from "react";
import Styles from "./About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import CV from "./CVTuire.pdf";
import Character from "./Character";

export default function About() {
  return (
    <div className={Styles.container}>
      <div className={Styles.infoBlock}>
        <div className={Styles.aboutMe}>
          <div className={Styles.title}>Hello there!👋</div>
          <div className={Styles.linksIcons}>
            <a
              href="https://www.linkedin.com/in/tuire-nissinen-284756204/"
              target="_blank"
            >
              <FontAwesomeIcon icon={brands("linkedin")} />
            </a>
            <a href="https://github.com/Sugarixi" target="_blank">
              <FontAwesomeIcon icon={brands("github")} />
            </a>
            <a href="mailto:sugarixi@gmail.com" target="_blank">
              <FontAwesomeIcon icon={solid("envelope")} />
            </a>
            <a href={CV} target="_blank">
              <span className="fa-layers">
                <FontAwesomeIcon icon={solid("file")} />
                <span className={"fa-layers-text " + Styles.cv}>CV</span>
              </span>
            </a>
          </div>
        </div>
        <div className={Styles.aboutMeText}>
          My name is Tuire Nissinen. I'm a front end developer based in Finland.
          I learned the basics of HTML and CSS during my studies at Taitotalo.
          After graduating I have studied JavaScript and React.js independently
          through various online courses and by just by trying things out! At
          the moment I'm working my way through Scrimba's front end developer
          career path to improve my skills in JavaScript and React. Also with
          quite a bit of customer service experience acquired I can handle
          anybody. Don't be afraid to hit me up!
        </div>
        <div className={Styles.skills}>
          <div className={Styles.titleSkills}>My Toolkit 💻</div>
          <div className={Styles.skillsIcons}>
            <i className="devicon-html5-plain-wordmark"></i>
            <i className="devicon-css3-plain-wordmark"></i>
            <i className="devicon-javascript-plain"></i>
            <i className="devicon-react-original-wordmark"></i>
            <i className="devicon-git-plain-wordmark"></i>
            <i className="devicon-vscode-plain-wordmark"></i>
            <i className="devicon-figma-plain"></i>
            <i className="devicon-photoshop-plain"></i>
          </div>
        </div>
      </div>
      <Character />
    </div>
  );
}
