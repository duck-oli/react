import styles from "../css/Menu.module.css";
import search from "../imgs/search.png";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className={styles.mainBar}>
      <h1 className={styles.title}>
        <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
      </h1>
      <a href="#"><img src={search} className={styles.img}/></a>
    </div>
  );
}

export default Menu;