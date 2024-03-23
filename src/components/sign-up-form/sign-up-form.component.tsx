import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";

import "./sign-up-form.styles.scss";

/////////////////////////////////////////////////////////////////////

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

/////////////////////////////////////////////////////////////////////

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const submit = await createAuthUserWithEmailAndPassword(
      formFields.email,
      formFields.password,
      formFields.displayName
    );
    if (submit) setFormFields(defaultFormFields);
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          required
          value={formFields.displayName}
          onChange={handleChange}
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          required
          value={formFields.email}
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          required
          value={formFields.password}
          onChange={handleChange}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          required
          value={formFields.confirmPassword}
          onChange={handleChange}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
