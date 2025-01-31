import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { FormContainer, Title, InputsContainer, CheckboxContainer } from "./styles";

const EmployeeForm = () => {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .required("Full Name is required")
      .min(5, "Minimum 5 characters")
      .max(50, "Maximum 50 characters"),
    age: Yup.number()
      .required("Age is required")
      .min(18, "Minimum age is 18")
      .max(80, "Maximum age is 80"),
    jobTitle: Yup.string()
      .max(30, "Maximum 30 characters"),
    terms: Yup.boolean()
      .oneOf([true], "You must accept the terms")
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      age: "",
      jobTitle: "",
      terms: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Values:", values);
    },
  });

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <Title>Employee Form</Title>
      <InputsContainer>
        <Input
          name="fullName"
          label="Full Name*"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          placeholder="Enter your full name"
          error={formik.errors.fullName}
        />
        <Input
          name="age"
          label="Age*"
          type="number"
          value={formik.values.age}
          onChange={formik.handleChange}
          placeholder="Enter your age"
          error={formik.errors.age}
        />
        <Input
          name="jobTitle"
          label="Job Title"
          value={formik.values.jobTitle}
          onChange={formik.handleChange}
          placeholder="Enter your job title"
          error={formik.errors.jobTitle}
        />
      </InputsContainer>
      <CheckboxContainer>
        <input
          type="checkbox"
          name="terms"
          checked={formik.values.terms}
          onChange={formik.handleChange}
        />
        <label htmlFor="terms">Accept Terms*</label>
        {formik.errors.terms && <div>{formik.errors.terms}</div>}
      </CheckboxContainer>
      <Button type="submit" name="Create" />
    </FormContainer>
  );
};
export default EmployeeForm