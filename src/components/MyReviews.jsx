import { FlatList } from "react-native";
import { useQuery } from "@apollo/client";

import { ME } from "../graphql/queries";
import ReviewItem from "./ReviewItem";

const MyReviews = () => {
  const { data, loading } = useQuery(ME, {
    variables: { includeReviews: true },
  });

  if (loading) return null;

  return <FlatList data={data.me.reviews.edges} renderItem={ReviewItem} />;
};

export default MyReviews;
