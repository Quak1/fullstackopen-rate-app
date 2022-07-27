import { FlatList, View, StyleSheet } from "react-native";
import { Link } from "react-router-native";

import RepositoryItem from "./RepositoryItem";
import SortOrderPicker from "./SortOrderPicker";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const PressableItem = ({ item }) => {
  return (
    <Link to={`/repositories/${item.id}`}>
      <RepositoryItem item={item} />
    </Link>
  );
};

const RepositoryListContainer = ({ repositories, pickerState }) => {
  const ItemSeparator = () => <View style={styles.separator} />;

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      ListHeaderComponent={<SortOrderPicker state={pickerState} />}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={PressableItem}
    />
  );
};

export default RepositoryListContainer;
