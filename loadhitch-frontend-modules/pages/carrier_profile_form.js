import CompanyProfile from "../components/CompanyProfile";
import FinancialInfo from "../components/FinancialInfo";
import FormLayout from "../components/FormLayout";
import FormNav from "../components/FormNav";
import LoadProfile from "../components/LoadProfile";

const carrier_profile_form = () => {
  return (
    <div>
      <FormLayout>
        <FormNav />
        <CompanyProfile />
        <FinancialInfo />
        <LoadProfile />
      </FormLayout>
    </div>
  );
};

export default carrier_profile_form;
