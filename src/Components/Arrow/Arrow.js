import React from "react";
import Styles from "./Arrow.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Arrow(props) {
  const [tooltipClass, settooltipClass] = React.useState(Styles.opacity0);

  function onHoverHandler() {
    settooltipClass((oldVal) => {
      if (oldVal === Styles.opacity0) {
        return Styles.opacity1;
      } else {
        return Styles.opacity0;
      }
    });
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.arrow_container}>
        <div className={Styles.text + " " + tooltipClass}>
          Scroll down for more
        </div>

        <div
          className={Styles.icon}
          onMouseOver={onHoverHandler}
          onMouseOut={onHoverHandler}
        >
          <a href={props.location}>
            <FontAwesomeIcon icon={solid("angle-down")} />
          </a>
        </div>
      </div>
    </div>
  );
}
