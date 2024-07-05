import PropTypes from "prop-types";
import styles from "../css/ditail/Movie.module.css"

function Movie({ coverImg, title, summary, genres, runtime, rating, year }) {
  return (

    <div className={styles.movie}>
      <div className={styles.img}>
        <img src={coverImg} alt={title}/>
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.info}>
          <span>{rating} rating</span>
          <span>{runtime} minutes</span>
          <span>{year} year</span>
          <p className={styles.summary}>{summary}</p>
        </div>
        <div className={styles.movieInfo}>
          <h1>genres</h1>
          <div className={styles.genres}>
            {genres.map(g =>
              <span key={g}>{g}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Movie.protoType = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired
}

export default Movie;