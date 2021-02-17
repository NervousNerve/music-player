import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import PlayerContextProvider from "./contexts/PlayerContext";

import Navbar from "./components/Navbar";
import SongPlayer from "./components/SongPlayer";
import Home from "./routes/Home";
import About from "./routes/About";

function App()  {
	const [links] = useState([
		{ name: "home", href: "/" },
		{ name: "about", href: "/about" },
	]);

	// const { currentSong } = useContext(PlayerContext);

	return (
		<div className="App">
			<BrowserRouter>
				<Navbar links={links}/>

				<PlayerContextProvider>
					{/* {currentSong !== undefined && */}
						<SongPlayer />
					{/* } */}

					<Route exact path="/">
						<Home />
					</Route>
				</PlayerContextProvider>

				<Route exact path="/about">
					<About />
				</Route>
			</BrowserRouter>
		</div>
	);
}

export default App;
