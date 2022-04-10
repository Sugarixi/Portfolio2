import React from "react";
import Styles from "./Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Nav(props) {
  return (
    <nav className={Styles.nav}>
      <div className={Styles.title}>Tuire</div>
      <div className={Styles.menu}>
        <span>
          <a href="#About">About</a>
        </span>
        <span>
          <a href="#Portfolio">Portfolio</a>
        </span>
        <span>
          <a href="#Contact">Contact</a>
        </span>
      </div>
      <div className={Styles.modeToggle} onClick={props.onModeChange}>
        <FontAwesomeIcon
          icon={props.isDarkTheme ? solid("moon") : solid("sun")}
        />
      </div>
      <div className={Styles.bubble} style={{ display: props.bubbleDisplay }}>
        <span>{props.isDarkTheme === true ? "My eyes! 🙈" : "Better! 😎"}</span>
      </div>
    </nav>
  );
}
