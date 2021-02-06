import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Loadhitch Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Row>
        <Col>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
        </Col>

        <Col>
          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.js</code>
          </p>
        </Col>

        
      </Row>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </Container>
  )
}
