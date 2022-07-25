import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";

import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.navBar.backgroundColor,
    display: "flex",
    flexDirection: "row",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab to="/" label="Repositories" />
        <AppBarTab to="/signin" label="Sign in" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
