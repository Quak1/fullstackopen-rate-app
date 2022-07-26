import { useQuery } from "@apollo/client";
import { useParams } from "react-router-native";

import { GET_REPOSITORY } from "../graphql/queries";
import RepositoryItem from "./RepositoryItem";

const RepositoryDetails = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_REPOSITORY, {
    variables: { repositoryId: id },
  });

  if (loading) {
    return null;
  }

  return <RepositoryItem item={data.repository} url={data.repository.url} />;
};

export default RepositoryDetails;
