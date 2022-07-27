import { useQuery } from "@apollo/client";

import { GET_ORDERED_REPOSITORIES } from "../graphql/queries";

const useRepositories = (variables) => {
  const { loading, error, data, fetchMore } = useQuery(
    GET_ORDERED_REPOSITORIES,
    {
      variables,
      fetchPolicy: "cache-and-network",
    }
  );

  if (error) console.log("useRepositories error:", error);

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    repositories: data?.repositories,
    loading,
    fetchMore: handleFetchMore,
  };
};

export default useRepositories;
