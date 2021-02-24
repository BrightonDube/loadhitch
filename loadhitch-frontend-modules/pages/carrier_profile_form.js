import CompanyProfile from "../components/CompanyProfile";
import FormLayout from "../components/FormLayout";
import FormNav from "../components/FormNav";

const carrier_profile_form = () => {
  return (
    <>
      <FormLayout>
        <FormNav />
        <CompanyProfile />
      </FormLayout>
    </>
  );
};

export default carrier_profile_form;
