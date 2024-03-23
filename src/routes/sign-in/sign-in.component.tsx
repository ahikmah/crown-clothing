// import { getRedirectResult } from "firebase/auth";
import {
  // auth,
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await getRedirectResult(auth);
  //     if (result) await createUserDocumentFromAuth(result.user);
  //   };
  //   fetchData();
  // }, []);

  const handleSignIn = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleSignIn}>Sign in with Google</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
    </div>
  );
};

export default SignIn;
