import { useEffect, useRef, useState } from "react";
import { TypeAnime } from "../services/api/types";
import { QueryAnime } from "../services/api/queries";
import List from "../components/ui/List";
import ListItem from "../components/ui/ListItem";
import Poster from "../components/Poster";

const ENDPOINT = "https://shikimori.one/api/graphql";

const SearchPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [animes, setAnimes] = useState<TypeAnime[]>([]);

  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    abortControllerRef.current?.abort();
    abortControllerRef.current = new AbortController();

    const fetchAnimes = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: QueryAnime,
          }),
          signal: abortControllerRef.current?.signal,
        });
        const promise = await response.json();
        const animes = promise.data.animes as TypeAnime[];
        setAnimes(animes);
      } catch (e: unknown) {
        if (abortControllerRef.current?.signal.aborted) {
          return;
        }
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnimes();
  }, []);

  return (
    <div>
      <header>
        <h1>Animes</h1>
        <p>Sorted by rating</p>
      </header>
      <main>
        <List>
          {animes.map((anime) => {
            return (
              <ListItem key={anime.id}>
                <Poster link={anime.url} text={anime.russian} />
              </ListItem>
            );
          })}
        </List>
        {error && <p>Sry, unexpected error. Please, try later.</p>}
        {isLoading && <p>Loading...</p>}
      </main>
    </div>
  );
};

export default SearchPage;
