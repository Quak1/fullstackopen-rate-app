import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import { useQuery } from "@apollo/client";

import theme from "../theme";
import AppBarTab from "./AppBarTab";
import { ME } from "../graphql/queries";
import useAuthStorage from "../hooks/useAuthStorage";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.navBar.backgroundColor,
    display: "flex",
    flexDirection: "row",
  },
});

const AppBar = () => {
  const { client, data } = useQuery(ME, { fetchPolicy: "cache-first" });
  const authStorage = useAuthStorage();

  const handleLogOut = () => {
    authStorage.removeAccessToken();
    client.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab to="/" label="Repositories" />
        {!data || !data.me ? (
          <>
            <AppBarTab to="/signin" label="Sign in" />
            <AppBarTab to="/signup" label="Sign up" />
          </>
        ) : (
          <>
            <AppBarTab to="/createReview" label="Create review" />
            <AppBarTab to="/myreviews" label="My reviews" />
            <AppBarTab to="/signin" label="Sign out" onPress={handleLogOut} />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
