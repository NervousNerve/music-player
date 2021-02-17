import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

import styles from "./SongPlayer.module.css";

function SongPlayer() {

	const {
		song, setSong,
		setVolume,
		isPaused, setIsPaused,
	} = useContext(PlayerContext);

	function changeVolume(e) {
		let val = e.target.value / 100.0;
		setVolume(val);
	}

	return song ?
		(<div className={styles.player + " gap-md"}>
			<div className="grid-row grid-center">
				<button onClick={() => {setSong(undefined)}}><i className="fas fa-stop"></i></button>
				{isPaused ? 
					<button onClick={() => {setIsPaused(false)}}><i className="fas fa-play"></i></button>
					:
					<button onClick={() => {setIsPaused(true)}}><i className="fas fa-pause"></i></button>
				}
			</div>
			<div>
				<p className="bold">{song.title}</p>
				<p>{song.artist}</p>
			</div>
			<div>
				<input type="range" onInput={changeVolume}></input>
			</div>
		</div>)
		: null; // Don't render if no song selected
}

export default SongPlayer;
