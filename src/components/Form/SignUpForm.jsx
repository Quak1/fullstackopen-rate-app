import { View, Text, Pressable, StyleSheet } from "react-native";

import theme from "../../theme";
import FormikTextInput from "./FormikTextInput";

const styles = StyleSheet.create({
  submit: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 10,
  },
  submitText: {
    color: "white",
    alignSelf: "center",
    fontWeight: "bold",
  },
});

const SignUpForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <FormikTextInput
        name="passwordConfirmation"
        placeholder="Password confirmation"
        secureTextEntry
      />
      <Pressable onPress={onSubmit} style={styles.submit}>
        <Text style={styles.submitText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignUpForm;
