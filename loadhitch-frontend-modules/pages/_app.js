import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";
import { StateMachineProvider, createStore } from "little-state-machine";

createStore({});

function MyApp({ Component, pageProps }) {
  return (
    <StateMachineProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateMachineProvider>
  );
}

export default MyApp;
