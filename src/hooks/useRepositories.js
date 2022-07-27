import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { GET_ORDERED_REPOSITORIES } from "../graphql/queries";

const useRepositories = (variables) => {
  const [repositories, setRepositories] = useState();
  const { loading, error, data, refetch } = useQuery(GET_ORDERED_REPOSITORIES, {
    variables,
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    if (!loading) {
      setRepositories(data.repositories);
    }
  }, [loading]);

  if (error) console.log("useRepositories error:", error);

  return {
    repositories,
    loading,
    refetch,
  };
};

export default useRepositories;
