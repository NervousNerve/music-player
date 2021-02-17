import { Component } from "react"
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

class Navbar extends Component {
	constructor(props) {
		super();
		this.state = {
			links: props.links,
			current: "",
		};
	}

	render() {
		return (
			<div className={styles.navbar + " grid-row space-between"}>
				<span className={styles.logo}>mPlayer</span>
				<div className={styles.navLinks + " grid-row grid-center gap-lg"}>
					{this.state.links.map((link, i) => (
						<NavLink exact={true} to={link.href} key={i}>{link.name}</NavLink>
					))}
				</div>
			</div>
		);
	}
}

export default Navbar;