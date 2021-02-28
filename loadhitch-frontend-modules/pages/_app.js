import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";
import { StateMachineProvider, createStore } from "little-state-machine";

const id = Math.floor(1 + Math.random() * 100000);
createStore({
  carrierCompName: "ABC Inc.",
  carrierId: `${id}`,
  Name: "Jon Doe",
  address1: "34 First Street",
  address2: "",
  bank_account: "355",
  cbsa: "355335",
  city: "From City",
  cityto: "To City",
  country: "Canada",
  cvor: "355",
  dot: "8888",
  email: "a@b.ca",
  haultype: "Choose...",
  institution: "",
  line: "Canada",
  lineto: "To",
  mcnumber: "355353",
  mobileNumber: "09898989889",
  province: "FROM: Province/State",
  provinceto: "To Province/State",
  return: false,
  tax: "Select...",
  transitNumber: "",
  vehiclecount: "Select your number of Transport Vehicles*",
  zip: "344",
});

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
