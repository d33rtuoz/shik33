const QueryAnime: string = `
query {
  animes(limit: 10){
    id
    russian
    url
  }
}
`;

export { QueryAnime };
