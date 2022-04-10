import React from "react";
import Styles from "./ArrowUp.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

export default function (props) {
  return (
    <div className={Styles.arrow}>
      <a href={props.location}>
        <FontAwesomeIcon icon={solid("arrow-up")} />
      </a>
    </div>
  );
}
