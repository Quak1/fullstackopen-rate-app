import { View, Text } from "react-native";

const RepositoryItem = ({ item: repository }) => {
  const starsCount = repository.stargazersCount;
  const stars =
    starsCount > 1000 ? (starsCount / 1000).toFixed(1) + "k" : starsCount;

  return (
    <View>
      <Text>Full Name: {repository.fullName}</Text>
      <Text>Description: {repository.description}</Text>
      <Text>Language: {repository.language}</Text>
      <Text>Stars: {stars}</Text>
      <Text>Forks: {repository.forksCount}</Text>
      <Text>Reviews: {repository.reviewCount}</Text>
      <Text>Rating: {repository.ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;
