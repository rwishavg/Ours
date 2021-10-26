import React, { useState, useRef } from "react";
import styled from "styled-components";

//importing app styles
import "./App.css";

// Importing all components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Dev from "./components/Dev";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Importing database data
import data from "./data";

const App = () => {
	//Default Ref
	const audioRef = useRef(null);

	//Default States
	const [songs, setSongs] = useState(data());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);
	const [libraryStatus, setLibraryStatus] = useState(false);
	const [devStatus, setDevStatus] = useState(false);
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
	});

	//Functions
	const updateTimeHandler = (e) => {
		const currentTime = e.target.currentTime;
		const duration = e.target.duration;
		setSongInfo({ ...songInfo, currentTime, duration });
	};

	const songEndHandler = async () => {
		let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
		let nextSong = songs[(currentIndex + 1) % songs.length];
		await setCurrentSong(nextSong);

		const newSongs = songs.map((song) => {
			if (song.id === nextSong.id) {
				return {
					...song,
					active: true,
				};
			} else {
				return {
					...song,
					active: false,
				};
			}
		});
		setSongs(newSongs);

		if (isPlaying) {
			audioRef.current.play();
		}
	};

	return (
		<AppContainer libraryStatus={libraryStatus} devStatus={devStatus}>
			<Header libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} devStatus={devStatus} setDevStatus={setDevStatus} />
			<Song currentSong={currentSong} />
			<Player
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				currentSong={currentSong}
				setCurrentSong={setCurrentSong}
				audioRef={audioRef}
				songInfo={songInfo}
				setSongInfo={setSongInfo}
				songs={songs}
				setSongs={setSongs}
			/>
			<Library
				songs={songs}
				setCurrentSong={setCurrentSong}
				audioRef={audioRef}
				isPlaying={isPlaying}
				setSongs={setSongs}
				libraryStatus={libraryStatus}
			/>
			<Dev devStatus={devStatus}/>
			<Footer libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} devStatus={devStatus} setDevStatus={setDevStatus}/>
			<audio
				onLoadedMetadata={updateTimeHandler}
				onTimeUpdate={updateTimeHandler}
				onEnded={songEndHandler}
				ref={audioRef}
				src={currentSong.audio}
			/>
		</AppContainer>
	);
};

//styles for app container 
const AppContainer = styled.div`
	transition: all 0.5s ease;
	margin-left: ${(p) => (p.libraryStatus ? "20rem" : "0")};
	margin-right: ${(p) => (p.devStatus ? "20rem" : "0")};
	@media screen and (max-width: 768px) {
		margin-left: 0;
		margin-right: 0;
	}
`;

export default App;
