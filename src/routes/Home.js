import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

import SongItem from "../components/SongItem";

function Home() {
	const { songList } = useContext(PlayerContext);

	return (
		<div className="p-md gallery-grid gap-md">
			{songList.map((song, i) => (
				<SongItem song={song} key={i} />
			))}
		</div>
	);
}

export default Home;