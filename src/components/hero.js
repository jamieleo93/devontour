import React from "react";
import Img from "gatsby-image";

import styles from "../assets/css/components/hero.module.css";

export default ({ data }) => (
  <div className={styles.hero}>
    <Img
      className={styles.heroImage}
      alt={data.name}
      fluid={data.bannerImage.fluid}
    />
    <div className={styles.heroDetails}>
      <h3 className={styles.heroHeadline}>{data.bannerText}</h3>
    </div>
  </div>
);
