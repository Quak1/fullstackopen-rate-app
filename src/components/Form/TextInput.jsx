import { TextInput as NativeTextInput, StyleSheet } from "react-native";

import theme from "../../theme";

const styles = StyleSheet.create({
  input: {
    borderColor: theme.colors.textSecondary,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: theme.fontSizes.subheading,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  onError: {
    borderColor: theme.colors.error,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.input, style, error && styles.onError];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
