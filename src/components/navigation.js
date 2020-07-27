import React from "react";
import { Link } from "gatsby";
import styles from "../assets/css/components/navigation.module.css";

export default () => (
  <nav className={styles.navigationContainer} role="navigation">
    <p>Developerontour</p>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li>
    </ul>
  </nav>
);
