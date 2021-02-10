import React from "react";
import Navi from "./Nav";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Navi />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
