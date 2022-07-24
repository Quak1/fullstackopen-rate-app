import { gql } from "@apollo/client";

export const REPOSITORY_DISPLAY_FIELDS = gql`
  fragment RepositoryDisplayFields on Repository {
    ownerAvatarUrl
    fullName
    description
    language
    stargazersCount
    forksCount
    ratingAverage
    reviewCount
  }
`;
