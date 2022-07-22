import { View, StyleSheet } from "react-native";

import Text from "../Text";

const styles = StyleSheet.create({
  alignItems: "center",
});
const DataPoint = ({ amount, label }) => {
  return (
    <View style={styles}>
      <Text fontWeight="bold">{amount}</Text>
      <Text color="textSecondary">{label}</Text>
    </View>
  );
};

export default DataPoint;
