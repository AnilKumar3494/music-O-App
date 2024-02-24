import React from 'react';

const Song = ({ songsArray, setCurrentPlaying, setIsPlaying }) => {

    const handlePlay = (song) => {
        setCurrentPlaying(song);
        setIsPlaying(true); // Set isPlaying to true when a song is selected to play
        // console.log("Playing:", song.title);
    }

    const handleDoubleClick = (song) => {
        setCurrentPlaying(song);
        setIsPlaying(true); // Set isPlaying to true when a song is selected to play
        // console.log("Playing (Double Click):", song.title);
    }


    return (
        <div className="playlist_entry">
            {songsArray.map((song, songIndex) => (
                <div className="playlists_container" key={songIndex}>
                    <div className="playlist_bar" onDoubleClick={() => handleDoubleClick(song)} title="Double Click to Play" style={{ borderColor: songIndex % 2 === 0 && 'white' }}>
                        <div className="song_detail">
                            <span>{song.title}</span>
                            <span>{song.artist}</span>
                            <span>{song.year}</span>
                        </div>
                        <a className="play_btn" onClick={() => handlePlay(song)} title="Click to Play">Play</a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Song;
