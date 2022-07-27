import { useState } from "react";
import RepositoryListContainer from "./RepositoryListContainer";
import useRepositories from "../hooks/useRepositories";

const RepositoryList = () => {
  const [picker, setPicker] = useState("latest");

  const sortVariables = {
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
  };

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
    />
  );
};

export default RepositoryList;
