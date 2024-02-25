import React from 'react';

const Song = ({ songsArray, currentPlaying, setCurrentPlaying, setIsPlaying }) => {

    const handlePlay = (song) => {
        setCurrentPlaying(song);
        setIsPlaying(true);
    }

    const handleDoubleClick = (song) => {
        setCurrentPlaying(song);
        setIsPlaying(true);
    }


    return (
        <div className="playlist_entry">
            {songsArray.map((song, songIndex) => (
                <div className="playlists_container" key={songIndex}>
                    <div className="playlist_bar" onDoubleClick={() => handleDoubleClick(song)} title="Double Click to Play"
                        style={{
                            borderColor: songIndex % 2 === 0 && 'white',
                            border: song === currentPlaying && '1px solid red'
                        }}>
                        <div className="song_detail">
                            <span className='play_title'>{song.title}</span>
                            <span>{song.artist}</span>
                            <span>{song.year}</span>
                        </div>
                        <a className="play_btn" onClick={() => handlePlay(song)} title="Click to Play">{song === currentPlaying ? 'Playing' : 'Play'}</a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Song;
