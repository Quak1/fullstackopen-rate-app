import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import Constants from "expo-constants";
import { setContext } from "@apollo/client/link/context";

import useAuthStorage from "../hooks/useAuthStorage";

const httpLink = createHttpLink({
  uri: Constants.manifest.extra.apolloUri,
});

const createApolloClient = () => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const authStorage = useAuthStorage();
      const token = await authStorage.getAccessToken();
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : "",
        },
      };
    } catch (e) {
      console.log(e);
      return { headers };
    }
  });

  return new ApolloClient({
    link: httpLink.concat(authLink),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
