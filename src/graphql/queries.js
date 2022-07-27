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

export const GET_ORDERED_REPOSITORIES = gql`
  ${REPOSITORY_DISPLAY_FIELDS}
  query Repositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $after: String
    $first: Int
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      after: $after
      first: $first
    ) {
      edges {
        node {
          ...RepositoryDisplayFields
        }
      }
      pageInfo {
        endCursor
        hasNextPage
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
  query Repository($repositoryId: ID!, $first: Int, $after: String) {
    repository(id: $repositoryId) {
      ...RepositoryDisplayFields
      url
      reviews(first: $first, after: $after) {
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
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;
