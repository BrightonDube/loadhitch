import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import { Row, Col } from "react-bootstrap";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Loadhitch Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Row className="header no-gutters">
        <Col>
          <Header />
        </Col>
      </Row>
    </>
  );
}
