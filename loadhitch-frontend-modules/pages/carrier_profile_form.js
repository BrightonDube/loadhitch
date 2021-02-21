import CompanyProfile from "../components/CompanyProfile";
import FormLayout from "../components/FormLayout";
import FormNav from "../components/FormNav";

import { useHistory } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";

const carrier_profile_form = () => {
  const history = useHistory();
  return (
    <div>
      <FormLayout>
        <StateMachineProvider>
          <FormNav />
          <CompanyProfile />
        </StateMachineProvider>
      </FormLayout>
    </div>
  );
};

export default carrier_profile_form;
