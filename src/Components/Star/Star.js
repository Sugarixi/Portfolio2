import React from "react";
import Styles from "./Star.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Star(props) {
  const animation =
    Styles.scale +
    " " +
    props.duration +
    "s linear " +
    props.delay +
    "s infinite alternate";
  return (
    <div
      className={Styles.star}
      style={{ top: props.top, left: props.left, animation: animation }}
    >
      <FontAwesomeIcon icon={solid("star")} />
    </div>
  );
}
