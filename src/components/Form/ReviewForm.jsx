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

const ReviewForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput
        name="repositoryOwner"
        placeholder="Repository owner name"
      />
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
      <FormikTextInput
        name="rating"
        placeholder="Rating between 0 and 100"
        keyboardType="numeric"
      />
      <FormikTextInput name="review" placeholder="Review" multiline />
      <Pressable onPress={onSubmit} style={styles.submit}>
        <Text style={styles.submitText}>Create review</Text>
      </Pressable>
    </View>
  );
};

export default ReviewForm;
