import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";
import styles from "./SongItem.module.css";

function SongItem(props) {
	const { setSong } = useContext(PlayerContext);

	return (
		<div className={styles.songItem + " card"}>
			<div className={styles.imageBox}>
				<img className={styles.songImg} src={props.song.image} alt={props.song.artist} />
				<button
					className={styles.playBtn}
					onClick={() => { setSong(props.song); }}
				>
					<i className="fas fa-play"></i>
				</button>
			</div>
			<div className={styles.content}>
				<p	className={styles.title}
					onClick={() => { setSong(props.song); }}
				>
					{props.song.title}
				</p>
				<p className={styles.subtitle}>
					<span className={styles.label}>Artist: </span>
					{props.song.artist}
				</p>
				<p className={styles.subtitle}>
					<span className={styles.label}>Album: </span>
					{props.song.album}
				</p>
			</div>
		</div>
	);
}

export default SongItem;