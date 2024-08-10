export const API_URL = "https://nomad-movies.nomadcoders.workers.dev";

const MoviePage = async () => {
    const getMovie = async () => {
        const res = await fetch(API_URL);
    };

    return <h1>MoviePage</h1>;
};
export default MoviePage;
