import { FlatList } from "react-native";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-native";

import { GET_REPOSITORY } from "../graphql/queries";
import RepositoryItem from "./RepositoryItem";
import ReviewItem from "./ReviewItem";

const RepositoryDetails = () => {
  const { id } = useParams();
  const variables = { repositoryId: id, first: 3 };
  const { loading, data, fetchMore } = useQuery(GET_REPOSITORY, {
    variables,
    fetchPolicy: "cache-and-network",
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) return;

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  if (loading) {
    return null;
  }

  return (
    <FlatList
      data={data.repository.reviews.edges}
      renderItem={ReviewItem}
      ListHeaderComponent={
        <RepositoryItem item={data.repository} url={data.repository.url} />
      }
      onEndReached={handleFetchMore}
    />
  );
};

export default RepositoryDetails;
