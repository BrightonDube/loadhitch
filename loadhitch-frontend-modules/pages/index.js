import Head from "next/head";
import styles from "../styles/Home.module.css";

import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Loadhitch Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Row>
        <Col>Col 1</Col>

        <Col>Col 2</Col>
      </Row>
    </Container>
  );
}
