import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar(props) {
	return (
		<div className={styles.navbar + " grid-row space-between"}>
			<span className={styles.logo}>mPlayer</span>
			<div className={styles.navLinks + " grid-row grid-center gap-lg"}>
				{props.links.map((link, i) => (
					<NavLink exact={true} to={link.href} key={i}>{link.name}</NavLink>
				))}
			</div>
		</div>
	);
}

export default Navbar;