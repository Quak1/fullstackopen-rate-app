import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-native";

import SignUpForm from "./Form/SignUpForm";
import useSignUp from "../hooks/useSignUp";
import useSignIn from "../hooks/useSignIn";

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .max(30, "Username max length: ${max} characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password must be at least ${min} characters long")
    .max(50, "Password max length: ${max} characters"),
  passwordConfirmation: yup
    .string()
    .equals([yup.ref("password"), null], "Password confirmation must match")
    .required("Password confirmation is required"),
});

const initialValues = {
  username: "",
  password: "",
  passwordConfirmation: "",
};

const styles = StyleSheet.create({
  padding: 10,
  backgroundColor: "white",
});

const SignUp = () => {
  const navigate = useNavigate();
  const signUp = useSignUp();
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const userId = await signUp({ username, password });
      if (userId) {
        await signIn({ username, password });
        navigate("/");
      }
    } catch (e) {
      console.log("error:", e.message);
    }
  };

  return (
    <View style={styles}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignUp;
