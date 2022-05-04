import PageWrapper from "../Components/PageWrapper/PageWrapper";
import SignupContainer from "../Components/Signup/Container/SignupContainer";

const SignupPage = () => (
  <>
    <PageWrapper
      title="Sign up for Twitter / Twitter"
      Component={SignupContainer}
      props={{}}
    />
  </>
);
export default SignupPage;
