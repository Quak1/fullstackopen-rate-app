import { useState } from "react";
import RepositoryListContainer from "./RepositoryListContainer";
import useRepositories from "../hooks/useRepositories";
import { useDebounce } from "use-debounce";

const RepositoryList = () => {
  const [picker, setPicker] = useState("latest");
  const [searchText, setSearchText] = useState("");
  const [debouncedSearchText] = useDebounce(searchText, 500);

  const sortVariables = {
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
    searchKeyword: debouncedSearchText,
  };

  console.log(searchText);
  if (picker === "highest") {
    sortVariables.orderBy = "RATING_AVERAGE";
  } else if (picker === "lowest") {
    sortVariables.orderBy = "RATING_AVERAGE";
    sortVariables.orderDirection = "ASC";
  }

  const { repositories } = useRepositories(sortVariables);

  return (
    <RepositoryListContainer
      repositories={repositories}
      pickerState={{ get: picker, set: setPicker }}
      searchState={{ get: searchText, set: setSearchText }}
    />
  );
};

export default RepositoryList;
