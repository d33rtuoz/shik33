import { useEffect, useState } from "react";

import { Anime } from "../gql/graphql";

import List from "../components/ui/List/List";
import ListItem from "../components/ui/ListItem/ListItem";
import Poster from "../components/Poster/Poster";
import { getAnimes } from "../services/api/fetches";

import useElementOnScreen from "../services/hooks/useElementOnScreen";
import ListItemText from "../components/ui/ListItemText/ListItemText";

const AnimeList = () => {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [page, setPage] = useState(1);

  const { containerRef, isVisible } = useElementOnScreen();

  useEffect(() => {
    const fetchAnimes = async () => {
      setIsLoading(true);
      try {
        const variables = {
          page: page,
        };
        const response = await getAnimes(variables);

        /* add as page, check if already has */
        setAnimes((e) => [...e, ...response]);

        setError(null);
      } catch (e) {
        if (typeof e === "string") {
          setError(e);
        } else if (e instanceof Error) {
          setError(e.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (isVisible && !isLoading) {
      setPage(page + 1);
      fetchAnimes();
    }
  }, [page, isVisible, isLoading]);

  return (
    <div>
      {animes && (
        <List>
          {animes?.map((anime) => {
            return (
              <ListItem key={anime.id} url={anime.url}>
                <Poster url={anime.poster?.mainUrl} alt={anime.russian} />
                <ListItemText text={anime.russian} />
              </ListItem>
            );
          })}
        </List>
      )}
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div ref={containerRef}>Observered</div>
    </div>
  );
};

const SearchPage = () => {
  return <AnimeList />;
};

export default SearchPage;
