import React from "react";
import Styles from "./Letter.module.css";

export default function Letter() {
  return (
    <div className={Styles.envelope}>
      <div className={Styles.envelopeBack}></div>
      <div className={[Styles.letter, Styles.letterIn].join(" ")}>message</div>
      <div className={Styles.envelopeFront}></div>
      <div className={Styles.envelopeFlap}></div>
    </div>
  );
}
