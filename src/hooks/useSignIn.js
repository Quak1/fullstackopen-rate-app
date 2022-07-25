import { useMutation, useApolloClient } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/mutations";

import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(AUTHENTICATE);
  const apolloClient = useApolloClient();

  const signIn = async (credentials) => {
    const { data } = await mutate({
      variables: { credentials },
    });
    await authStorage.setAccessToken(data.authenticate.accessToken);
    apolloClient.resetStore();
    return data;
  };

  return [signIn, result];
};

export default useSignIn;
