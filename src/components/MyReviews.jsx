import { Text } from "react-native";
import { useQuery } from "@apollo/client";

import { ME } from "../graphql/queries";

const MyReviews = () => {
  const { data, loading } = useQuery(ME, {
    variables: { includeReviews: true },
  });

  console.log(data);

  return <Text>My reviews</Text>;
};

export default MyReviews;
