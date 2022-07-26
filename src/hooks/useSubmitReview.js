import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";

const useSubmitReview = () => {
  const [mutate] = useMutation(CREATE_REVIEW);

  const submit = async (values) => {
    const { repositoryOwner, repositoryName, rating, review } = values;

    const { data } = await mutate({
      variables: {
        review: {
          ownerName: repositoryOwner,
          repositoryName,
          rating: Number(rating),
          text: review,
        },
      },
    });

    return data.createReview.repositoryId;
  };

  return submit;
};

export default useSubmitReview;
