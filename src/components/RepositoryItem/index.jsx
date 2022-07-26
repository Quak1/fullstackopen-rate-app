import { View, StyleSheet, Text, Pressable } from "react-native";
import * as Linking from "expo-linking";

import theme from "../../theme";
import Description from "./Description";
import Info from "./Info";

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: theme.colors.foreground,
  },
  githubButton: {
    marginTop: 15,
    padding: 15,
    borderRadius: 5,
    color: "white",
    fontWeight: "bold",
    backgroundColor: theme.colors.primary,
    textAlign: "center",
  },
});

const RepositoryItem = ({ item, url }) => {
  return (
    <View style={styles.container} testID="repositoryItem">
      <Description
        avatar={item.ownerAvatarUrl}
        name={item.fullName}
        description={item.description}
        language={item.language}
      />
      <Info
        stars={item.stargazersCount}
        forks={item.forksCount}
        rating={item.ratingAverage}
        reviews={item.reviewCount}
      />
      {url && (
        <Pressable onPress={() => Linking.openURL(item.url)}>
          <Text style={styles.githubButton}>Open on GitHub</Text>
        </Pressable>
      )}
    </View>
  );
};

export default RepositoryItem;
