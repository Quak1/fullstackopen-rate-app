import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import SignInForm from "./Form/SignInForm";

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Username is required"),
  password: yup
    .string()
    .min(5, "Username must be at least 5 characters long")
    .required("Password is required"),
});

const initialValues = {
  username: "",
  password: "",
};

const styles = StyleSheet.create({
  padding: 10,
  backgroundColor: "white",
});

const SignInContainer = ({ onSubmit }) => {
  return (
    <View style={styles}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignInContainer;
