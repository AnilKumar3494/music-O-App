import React, { useEffect, useState } from 'react';

import Song from './Song';
import Podcast from './Podcast';

import Statussong from './Statussongs';
import Statuspodcasts from './Statuspodcasts';

import './styles.css';


export default function Playlist() {
    const [songs, setSongs] = useState([]);
    const [podcasts, setPodcasts] = useState([]);

    const [currentPlayingSong, setCurrentPlayingSong] = useState(null);
    const [currentPlayingPodcast, setCurrentPlayingPodcast] = useState(null);

    const [currentPlayingIndexSong, setCurrentPlayingIndexSong] = useState(0); // Store the index of the current playing song
    const [currentPlayingIndexPodcast, setCurrentPlayingIndexPodcast] = useState(0); // Store the index of the current playing podcast

    const [initialized, setInitialized] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false); // State to track play/pause


    //Fetching data from JSON Server
    useEffect(() => {
        const fetchData = async () => {
            try {
                //Fetching data from server - GitHub
                const response = await fetch('https://anilkumar3494.github.io/host-json/myTracks.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                //Assigning data yo use
                const data = await response.json();
                const tracks = data.tracks;

                //seperating songs and podcasts from tracks
                const songs = tracks.filter(item => item.artist && item.year);
                const podcasts = tracks.filter(item => (item.episodeTitle || item.episode));

                //shuffle only on shuffle button clicked
                if (!initialized) {
                    const shuffledSongs = shuffleArray(songs);
                    const shuffledPodcasts = shuffleArray(podcasts);

                    setSongs(shuffledSongs);
                    setPodcasts(shuffledPodcasts);

                    setInitialized(true);
                } else {
                    setSongs(songs);
                    setPodcasts(podcasts);
                }
            } catch (error) {
                console.error('There was a problem with fetching data:', error);
            }
        };

        fetchData();
    }, [initialized]);


    //SHUFFLING
    const shuffleArray = array => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    const shuffleSongs = () => {
        const shuffledSongs = shuffleArray(songs);
        setSongs(shuffledSongs);
        // Update currentPlayingIndex based on shuffled songs
        const currentSongIndex = shuffledSongs.findIndex(song => song === currentPlayingSong);
        setCurrentPlayingIndexSong(currentSongIndex !== -1 ? currentSongIndex : 0);
    };

    const shufflePodcasts = () => {
        const shuffledPodcasts = shuffleArray(podcasts);
        setPodcasts(shuffledPodcasts);
        const currentPodcastIndex = shuffledPodcasts.findIndex(podcast => podcast === currentPlayingPodcast);
        setCurrentPlayingIndexPodcast(currentPodcastIndex !== -1 ? currentPodcastIndex : 0);
    };


    //Play Next
    const playNextSong = () => {
        const nextIndex = (currentPlayingIndexSong + 1) % songs.length;
        setCurrentPlayingIndexSong(nextIndex);
        setCurrentPlayingSong(songs[nextIndex]);
        setIsPlaying(true);
    };

    const playNextPodcast = () => {
        const nextIndex = (currentPlayingIndexPodcast + 1) % podcasts.length;
        setCurrentPlayingIndexPodcast(nextIndex);
        setCurrentPlayingPodcast(podcasts[nextIndex]);
        setIsPlaying(true);
    };


    //Play Previous
    const playPrevSong = () => {
        const prevIndex = (currentPlayingIndexSong - 1 + songs.length) % songs.length;
        setCurrentPlayingIndexSong(prevIndex);
        setCurrentPlayingSong(songs[prevIndex]);
        setIsPlaying(true);
    };

    const playPrevPodcast = () => {
        const prevIndex = (currentPlayingIndexPodcast - 1 + podcasts.length) % podcasts.length;
        setCurrentPlayingIndexPodcast(prevIndex);
        setCurrentPlayingPodcast(podcasts[prevIndex]);
        setIsPlaying(true);
    };


    //Play Pause
    const playPauseSong = () => {
        if (currentPlayingSong === null) {
            const randomIndex = Math.floor(Math.random() * songs.length);
            setCurrentPlayingSong(songs[randomIndex]);
            setCurrentPlayingIndexSong(randomIndex);
            setIsPlaying(true);
        } else if (!isPlaying) {
            setIsPlaying(true);
        } else {
            setIsPlaying(false);
        }
    };

    const playPausePodcast = () => {
        if (currentPlayingPodcast === null) {
            const randomIndex = Math.floor(Math.random() * podcasts.length);
            setCurrentPlayingPodcast(podcasts[randomIndex]);
            setCurrentPlayingIndexPodcast(randomIndex);
            setIsPlaying(true);
        } else if (!isPlaying) {
            setIsPlaying(true);
        } else {
            setIsPlaying(false);
        }
    };


    //Front-end
    return (
        <div>
            <div>
                <h1>Music-O Songs & Podcasts</h1>
            </div>


            {/* Songs Section */}
            <div className='songs_container'>
                <h2>Curated Songs</h2>
                <Statussong
                    currentPlaying={currentPlayingSong}
                    isPlaying={isPlaying}
                    playNext={playNextSong}
                    playPrev={playPrevSong}
                    playPause={playPauseSong}
                    shuffled={shuffleSongs}
                />
                <div className="songs_box">
                    <Song songsArray={songs} currentPlaying={currentPlayingSong} setCurrentPlaying={setCurrentPlayingSong} setIsPlaying={setIsPlaying} />
                </div>
            </div>


            {/* Podcasts Sections */}
            <div className='podcasts_container'>
                <h2>Curated Podcasts</h2>
                <Statuspodcasts
                    currentPlaying={currentPlayingPodcast}
                    isPlaying={isPlaying}
                    playNext={playNextPodcast}
                    playPrev={playPrevPodcast}
                    playPause={playPausePodcast}
                    shuffled={shufflePodcasts}
                />
                <div className="podcasts_box">
                    <Podcast podcastsArray={podcasts} currentPlaying={currentPlayingPodcast} setCurrentPlaying={setCurrentPlayingPodcast} setIsPlaying={setIsPlaying} />
                </div>
            </div>
        </div>
    );
}
