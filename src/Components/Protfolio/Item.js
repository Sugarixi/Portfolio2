import React from "react";
import Styles from "./Item.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import memegeneratorImg from "./memegenerator.png";

export default function Item(props) {
  return (
    <div className={Styles.main}>
      <img className={Styles.img} src={props.obj.imagePath}></img>
      <div className={Styles.text}>
        <span className={Styles.title}>{props.obj.title}</span>
        <span className={Styles.description}>{props.obj.description}</span>
      </div>
      <div className={Styles.buttons}>
        <a href={props.obj.websiteLink} target="_blank">
          <button>
            Live demo
            <FontAwesomeIcon icon={regular("eye")} />
          </button>
        </a>
        <a href={props.obj.githubLink} target="_blank">
          <button>
            github
            <FontAwesomeIcon icon={solid("code")} />
          </button>
        </a>
      </div>
    </div>
  );
}
