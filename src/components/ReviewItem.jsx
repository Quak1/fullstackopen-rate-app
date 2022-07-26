import { View, Text, StyleSheet } from "react-native";

import theme from "../theme";

const ratingSize = 45;
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 15,
    flexDirection: "row",
    backgroundColor: "white",
  },
  ratingContainer: {
    borderColor: theme.colors.primary,
    borderWidth: 2,

    width: ratingSize,
    height: ratingSize,
    borderRadius: ratingSize / 2,

    justifyContent: "center",
    alignItems: "center",
  },
  rating: {
    color: theme.colors.primary,
    fontWeight: "bold",
    fontSize: theme.fontSizes.subheading,
  },
  contentContainer: {
    flex: 1,
    marginLeft: 15,
  },
  username: {
    fontWeight: "bold",
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.subheading,
  },
  date: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textSecondary,
  },
  review: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
  },
});

const ReviewItem = ({ item }) => {
  const data = item.node;
  const date = new Date(data.createdAt).toLocaleDateString();

  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>{data.rating}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.username}>{data.user.username}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.review}>{data.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
