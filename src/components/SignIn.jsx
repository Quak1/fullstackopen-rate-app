import { View, StyleSheet } from "react-native";
import { Formik } from "formik";

import SignInForm from "./Form/SignInForm";

const initialValues = {
  username: "",
  password: "",
};

const styles = StyleSheet.create({
  padding: 10,
  backgroundColor: "white",
});

const SignIn = () => {
  const onSubmit = (values) => console.log(values);

  return (
    <View style={styles}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;
