import { View, StyleSheet } from "react-native";

import theme from "../../theme";
import Description from "./Description";
import Info from "./Info";

const styles = StyleSheet.create({
  padding: 10,
  backgroundColor: theme.colors.foreground,
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles}>
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
    </View>
  );
};

export default RepositoryItem;
