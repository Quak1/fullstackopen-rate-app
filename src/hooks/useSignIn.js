import { useMutation } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/mutations";

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);

  const signIn = (credentials) => {
    return mutate({
      variables: { credentials },
    });
  };

  return [signIn, result];
};

export default useSignIn;
