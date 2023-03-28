import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovieDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovieDetail();
  }, []);
  return <h1>Detail</h1>;
}
export default Detail;
