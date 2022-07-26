import { gql } from "@apollo/client";

import { REPOSITORY_DISPLAY_FIELDS } from "./fragments";

export const GET_REPOSITORIES = gql`
  ${REPOSITORY_DISPLAY_FIELDS}
  query Node {
    repositories {
      edges {
        node {
          ...RepositoryDisplayFields
        }
      }
    }
  }
`;

export const ME = gql`
  query Me {
    me {
      username
    }
  }
`;

export const GET_REPOSITORY = gql`
  ${REPOSITORY_DISPLAY_FIELDS}
  query Repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...RepositoryDisplayFields
      url
      reviews {
        edges {
          node {
            text
            rating
            createdAt
            user {
              username
            }
          }
        }
      }
    }
  }
`;
