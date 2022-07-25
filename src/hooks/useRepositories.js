import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";
const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const { loading, error, data, refetch } = useQuery(GET_REPOSITORIES, {
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