import { QueryAnime } from "./queries";
import { Anime } from "../../gql/graphql";

const ENDPOINT = import.meta.env.VITE_ENDPOINT;

type QueryVariables = {
  page: number;
};

export const getAnimes = async (variables: QueryVariables) => {
  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: QueryAnime,
      variables,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  const promise = await response.json();
  const animes = promise.data.animes as Anime[];
  return animes;
};
