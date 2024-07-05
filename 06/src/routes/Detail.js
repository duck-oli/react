import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie.Detail";
import Menu from "../components/Menu";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovie = async () => {
      const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
      setMovie(json.data.movie);
      setLoading(false);
    }

    getMovie();
  }, [id, movie])

  return (
    <div>
      <Menu/>
      {loading ? null : 
        <Movie 
          coverImg={movie.large_cover_image}
          title={movie.title}
          summary={movie.description_intro}
          genres={movie.genres}
          runtime={movie.runtime}
          rating={movie.rating}
          year={movie.year}
        />
      }
    </div>
  );
}
export default Detail;