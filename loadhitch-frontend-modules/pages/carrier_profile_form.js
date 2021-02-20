import CompanyProfile from "../components/CompanyProfile";
import LoadProfile from "../components/LoadProfile";
import FinancialInfo from "../components/FinancialInfo";
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
          <LoadProfile />
          <FinancialInfo />
        </StateMachineProvider>
      </FormLayout>
    </div>
  );
};

export default carrier_profile_form;
