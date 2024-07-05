import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/Movie.module.css";

function Movie({ coverImg, title, summary, year, id }) {
  return (
    <div className={styles.movie}>
      <div>
        <Link to={`/movie/${id}`}>
          <img src={coverImg} alt={title} className={styles.img}/>
        </Link>
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.year}>{year}</p>
        <p className={styles.summary}>{summary}</p>
      </div>
    </div>
  );
}

Movie.protoType = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  id: PropTypes.number
}

export default Movie;