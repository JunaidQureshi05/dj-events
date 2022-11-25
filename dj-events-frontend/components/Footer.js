import React from "react";
import styles from "../styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; DJ Events 2023</p>
      <p>
        <Link href="/about">About This Project</Link>
      </p>
    </footer>
  );
};

export default Footer;
