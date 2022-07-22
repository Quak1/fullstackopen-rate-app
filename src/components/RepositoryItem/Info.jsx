import { View, StyleSheet } from "react-native";

import DataPoint from "./DataPoint";

const roundNumber = (num) => {
  return num > 1000 ? (num / 1000).toFixed(1) + "k" : String(num);
};

const styles = StyleSheet.create({
  flexDirection: "row",
  justifyContent: "space-evenly",
});

const Info = ({ stars, forks, reviews, rating }) => {
  const starsCount = roundNumber(stars);
  const forksCount = roundNumber(forks);
  const reviewsCount = roundNumber(reviews);
  const ratingCount = roundNumber(rating);

  return (
    <View style={styles}>
      <DataPoint amount={starsCount} label="Stars" />
      <DataPoint amount={forksCount} label="Forks" />
      <DataPoint amount={reviewsCount} label="Reviews" />
      <DataPoint amount={ratingCount} label="Rating" />
    </View>
  );
};

export default Info;
