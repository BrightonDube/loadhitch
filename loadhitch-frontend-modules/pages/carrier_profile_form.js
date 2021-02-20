import CompanyProfile from "../components/CompanyProfile";

import FormLayout from "../components/FormLayout";
import FormNav from "../components/FormNav";

import { useHistory } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import LoadProfile from "../components/LoadProfile";

const carrier_profile_form = () => {
  const history = useHistory();
  return (
    <div>
      <FormLayout>
        <FormNav />
        <StateMachineProvider></StateMachineProvider>
        <CompanyProfile />
        <LoadProfile />
      </FormLayout>
    </div>
  );
};

export default carrier_profile_form;
