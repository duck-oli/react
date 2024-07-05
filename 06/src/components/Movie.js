import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./styels.css"

function Movie({ coverImg, title, summary, genres, id }) {
  return (
    <div style={{height:"450px", margin:"5px auto", boxShadow:"inset 0px 10px 30px -20px #aaa"}}>
      <Link to={`/movie/${id}`}>
        <img src={coverImg} alt={title} style={{float:"left", marginBottom:"105px", marginRight:"30px", boxShadow:"5px 20px 10px #aaa"}} />
      </Link>
      <div style={{height:"430px", paddingTop:"20px"}}>
        <h2 style={{marginBottom:"10px"}}>
          <Link to={`/movie/${id}`}  style={{textDecorationLine:"unset"}}>{title}</Link>
        </h2>
        <p className={styles.summary}>{summary}</p>
        <ul style={{paddingLeft:"260px"}}>
          <h2>genres</h2>
          {genres.map(g =>
            <li key={g} style={{marginLeft:"30px"}}>{g}</li>
          )}
        </ul>
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