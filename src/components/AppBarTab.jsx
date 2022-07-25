import { StyleSheet } from "react-native";
import { Link } from "react-router-native";

import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  color: theme.navBar.color,
  paddingVertical: 13,
  paddingHorizontal: 5,
});

const AppBarTab = ({ to, onPress, label }) => {
  onPress = onPress ? onPress : () => console.log("pressed", label);

  return (
    <Link to={to} onPress={onPress}>
      <Text fontSize="subheading" fontWeight="bold" style={styles}>
        {label}
      </Text>
    </Link>
  );
};

export default AppBarTab;
