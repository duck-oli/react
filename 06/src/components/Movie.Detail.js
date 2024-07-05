import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ coverImg, title, summary, genres, id }) {
  return (
    <div>
      <div>
        <img src={coverImg} alt={title} />
        <h2>
          {id == null ? `${title}` : <Link to={`/movie/${id}`}>{title}</Link>}
        </h2>
        <p>{summary}</p>
        <h2>genres</h2>
        <ul>
          {genres.map(g =>
            <li key={g}>{g}</li>
          )}
        </ul>
        <br/><br/><br/>
      </div>
    </div>
  );
}

Movie.protoType = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number
}

export default Movie;