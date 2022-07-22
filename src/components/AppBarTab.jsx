import { Pressable, StyleSheet } from "react-native";

import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  color: theme.navBar.color,
  paddingVertical: 13,
  paddingLeft: 10,
});

const AppBarTab = ({ children }) => {
  return (
    <Pressable onPress={() => console.log("pressed", children)}>
      <Text fontSize="subheading" fontWeight="bold" style={styles}>
        {children}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;
