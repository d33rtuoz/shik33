import { gql } from "graphql-request";

const QueryAnime: string = gql`
  query QueryAnime($page: Int!) {
    animes(page: $page, limit: 50) {
      id
      russian
      url
    }
  }
`;

export { QueryAnime };
