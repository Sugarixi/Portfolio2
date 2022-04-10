import React from "react";
import Styles from "./Portfolio.module.css";
import Item from "./Item";
import Data from "./data";

export default function Portfolio() {
  const items = Data.map((item) => (
    <Item obj={item} key={"project" + item.id} />
  ));

  return (
    <div className={Styles.main}>
      <div className={Styles.carouselContainer}>
        <div className={Styles.carousel}>{items}</div>
      </div>
    </div>
  );
}
