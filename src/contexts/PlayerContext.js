import { createContext, useState, useEffect } from "react";

export const PlayerContext = createContext();

function PlayerContextProvider(props) {
	const [songList] = useState([
		{
			title: "Singing Forest",
			artist: "M.W.D.",
			album: "Singing Forest",
			image: "https://archive.org/services/img/Singing_Forest-6930",
			audio: "https://archive.org/download/Singing_Forest-6930/MWD_-_01_-_Singing_Forest.mp3",
		},
		{
			title: "Wooly Mammoth's Absence",
			artist: "Mount Eerie",
			album: "Seven New Songs",
			image: "https://archive.org/services/img/Seven_New_Songs-320",
			audio: "https://archive.org/download/Seven_New_Songs-320/Mount_Eerie_-_01_-_Wooly_Mammoths_Absence.mp3",
		},
		{
			title: "Beware",
			artist: "Death Grips",
			album: "Exmilitary",
			image: "https://archive.org/services/img/Ex_Military-9086",
			audio: "https://archive.org/download/Ex_Military-9086/Death_Grips_-_01_-_Beware.mp3",
		},
		{
			title: "Rock Bottom, Pop. 1",
			artist: "Robbie Fulks",
			album: "Country Love Songs",
			image: "https://archive.org/services/img/Country_Love_Songs-3215",
			audio: "https://archive.org/download/Country_Love_Songs-3215/Robbie_Fulks_-_02_-_Rock_Bottom_Pop_1.mp3",
		},
		{
			title: "Nothing Like Captain Crunch",
			artist: "Broke For Free",
			album: "Slam Funk",
			image: "https://archive.org/services/img/Slam_Funk-7603",
			audio: "https://archive.org/download/Slam_Funk-7603/Broke_For_Free_-_01_-_Nothing_Like_Captain_Crunch.mp3",
		},
		{
			title: "Singing Forest",
			artist: "M.W.D.",
			album: "Singing Forest",
			image: "https://archive.org/services/img/Singing_Forest-6930",
			audio: "https://archive.org/download/Singing_Forest-6930/MWD_-_01_-_Singing_Forest.mp3",
		},
		{
			title: "Wooly Mammoth's Absence",
			artist: "Mount Eerie",
			album: "Seven New Songs",
			image: "https://archive.org/services/img/Seven_New_Songs-320",
			audio: "https://archive.org/download/Seven_New_Songs-320/Mount_Eerie_-_01_-_Wooly_Mammoths_Absence.mp3",
		},
		{
			title: "Beware",
			artist: "Death Grips",
			album: "Exmilitary",
			image: "https://archive.org/services/img/Ex_Military-9086",
			audio: "https://archive.org/download/Ex_Military-9086/Death_Grips_-_01_-_Beware.mp3",
		},
		{
			title: "Rock Bottom, Pop. 1",
			artist: "Robbie Fulks",
			album: "Country Love Songs",
			image: "https://archive.org/services/img/Country_Love_Songs-3215",
			audio: "https://archive.org/download/Country_Love_Songs-3215/Robbie_Fulks_-_02_-_Rock_Bottom_Pop_1.mp3",
		},
		{
			title: "Nothing Like Captain Crunch",
			artist: "Broke For Free",
			album: "Slam Funk",
			image: "https://archive.org/services/img/Slam_Funk-7603",
			audio: "https://archive.org/download/Slam_Funk-7603/Broke_For_Free_-_01_-_Nothing_Like_Captain_Crunch.mp3",
		},
	]);
	const [audio] = useState(new Audio());
	const [song, setSong] = useState(undefined);
	const [volume, setVolume] = useState(0.5);
	const [isPaused, setIsPaused] = useState(false);

	useEffect(() => {
		if (!song) {
			audio.pause();
			audio.src = "";
		} else {
			console.log("Playing:", song);
			
			audio.src = song.audio;
			audio.play();
		}
	}, [audio, song]);

	useEffect(() => {
		audio.volume = volume;
	}, [audio, volume]);

	useEffect(() => {
		isPaused ? audio.pause() : audio.play();
	}, [audio, isPaused]);

	const values = {
		songList,
		song, setSong,
		volume, setVolume,
		isPaused, setIsPaused,
	}

	return (
		<PlayerContext.Provider value={values}>
			{props.children}
		</PlayerContext.Provider>
	);
}

export default PlayerContextProvider;
