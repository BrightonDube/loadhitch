import CompanyProfile from "../components/CompanyProfile";
import FormLayout from "../components/FormLayout";
import FormNav from "../components/FormNav";
import { StateMachineProvider, createStore } from "little-state-machine";

createStore({
  yourDetails: {
    firstName: "",
    lastName: "",
    age: "",
    yearsOfExp: "",
  },
});
const carrier_profile_form = () => {
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
