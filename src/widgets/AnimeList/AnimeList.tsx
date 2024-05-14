import { useQuery } from "@tanstack/react-query";
import { request, gql } from "graphql-request";

const ENDPOINT: string = "https://shikimori.one/api/graphql";

interface Anime {
  id: string;
  name: string;
  russian: string;
  kind: string;
  rating: string;
  score: string;
  status: string;
  url: string;
}

export default function AnimeList() {
  const { status, data, error, isFetching } = useQuery({
    queryKey: ["animes"],
    queryFn: async () => {
      interface Data {
        animes: Anime[];
      }
      const { animes } = await request<Data>(
        ENDPOINT,
        gql`
          {
            animes(limit: 50) {
              id
              name
              russian
              kind
              rating
              score
              status
              url
            }
          }
        `
      );
      return animes;
    },
  });

  return (
    <div>
      <div>
        {status === "pending" ? (
          "Loading..."
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <div>
              {data.map((anime: Anime) => (
                <p key={anime.id}>
                  <a href={anime.url}>{anime.russian}</a>
                </p>
              ))}
            </div>
            <div>{isFetching ? "Background Updating..." : " "}</div>
          </>
        )}
      </div>
    </div>
  );
}
