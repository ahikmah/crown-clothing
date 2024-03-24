import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import "./authentication.styles.scss";

// ----------------------------------------------------------------------------------------

const Authentication = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await getRedirectResult(auth);
  //     if (result) await createUserDocumentFromAuth(result.user);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="authentication-container">
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}

      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
