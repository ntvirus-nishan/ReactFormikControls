import { Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import FormikControl from "./FormikControl";

function LoginForm() {
  const gender = [
    { key: "Male", value: "male" },
    { key: "Female", value: "female" },
  ];
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Required!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords did not matched")
      .required("Required!"),
    gender: Yup.string().required("Required!"),
  });

  const onSubmit = (values) => console.log("form Data", values);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          <FormikControl
            control="input"
            type="password"
            label="Password"
            name="password"
          />

          <FormikControl
            control="input"
            type="password"
            label="Confrim Password"
            name="confirmPassword"
          />
          <FormikControl
            control="radio"
            label="Gender"
            name="gender"
            options={gender}
          />
          <button type="submit">Log in</button>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
