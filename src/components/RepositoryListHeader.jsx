import { Searchbar } from "react-native-paper";

import SortOrderPicker from "./SortOrderPicker";

const RepositoryListHeader = ({ pickerState, searchState }) => {
  return (
    <>
      <Searchbar
        placeholder="Search"
        onChangeText={(query) => searchState.set(query)}
        value={searchState.get}
      />
      <SortOrderPicker state={pickerState} />
    </>
  );
};

export default RepositoryListHeader;
