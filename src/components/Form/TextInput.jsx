import { TextInput as NativeTextInput, StyleSheet } from "react-native";

import theme from "../../theme";

const styles = StyleSheet.create({
  borderColor: theme.colors.textSecondary,
  borderWidth: 1,
  borderRadius: 5,
  fontSize: theme.fontSizes.subheading,
  paddingVertical: 5,
  paddingHorizontal: 10,
  marginBottom: 10,
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles, style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
