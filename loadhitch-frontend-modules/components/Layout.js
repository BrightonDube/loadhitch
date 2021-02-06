import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import styles from "../styles/Home.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Nav />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
