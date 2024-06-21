import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const FormikContainer = () => {
  //For the select options
  const dropdownOptions = [
    { key: "Select an option", value: "" },
    { key: "option1", value: "option1" },
    { key: "option2", value: "option2" },
    { key: "option3", value: "option3" },
  ];

  const radioOptions = [
    { key: "Male", value: "Male" },
    { key: "Female", value: "Female" },
  ];

  const checkboxOptions = [
    { key: "Option 1", value: "checkboxOption1" },
    { key: "Option 2", value: "checkboxOption2" },
    { key: "Option 3", value: "checkboxOption3" },
  ];

  const initialValues = {
    email: "",
    name: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkboxOption: [],
    birthDate: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required!"),
    name: Yup.string().required("Required"),
    description: Yup.string().required("Required!"),
    selectOption: Yup.string().required("Required!"),
    radioOption: Yup.string().required("Required!"),
    checkboxOption: Yup.array()
      .min(1, "Select at list one")
      .required("Required!"),
    birthDate: Yup.date().required("Required").nullable(),
  });

  const onSubmit = (values) => console.log("Form Data", values);
  return (
    <div className="form-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {/* using renderProps pattern with function as children*/}

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
              type="text"
              label="Name"
              name="name"
            />

            <FormikControl
              control="textarea"
              label="Description"
              name="description"
            />
            <FormikControl
              control="select"
              label="Select an option"
              name="selectOption"
              options={dropdownOptions}
            />

            <FormikControl
              control="radio"
              label="Gender"
              name="radioOption"
              options={radioOptions}
            />

            <FormikControl
              control="checkbox"
              label="CheckBox Topic"
              name="checkboxOption"
              options={checkboxOptions}
            />

            <FormikControl
              control="date"
              label="Pick a date"
              name="birthDate"
            />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikContainer;
