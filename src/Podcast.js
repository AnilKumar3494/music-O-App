import React from 'react';

const Podcast = ({ podcastsArray, setCurrentPlaying, setIsPlaying }) => {

    const handlePlay = (podcast) => {
        setCurrentPlaying(podcast);
        setIsPlaying(true);
    }

    const handleDoubleClick = (podcast) => {
        setCurrentPlaying(podcast);
        setIsPlaying(true);
    }

    return (
        <div className="playlist_entry">
            {podcastsArray.map((podcast, podcastIndex) => (
                <div className="playlists_container" key={podcastIndex}>
                    <div className="playlist_bar" onDoubleClick={() => handleDoubleClick(podcast)} title="Double Click to Play" style={{ borderColor: podcastIndex % 2 !== 0 && 'white' }}>
                        <div className="podcast_detail">
                            <span>{podcast.episodeTitle}</span>
                            <span>
                                {podcast.season && podcast.episode
                                    ? `Season: ${podcast.season}, Episode: ${podcast.episode}`
                                    : podcast.season
                                        ? `Season: ${podcast.season}`
                                        : podcast.episode
                                            ? `Episode: ${podcast.episode}`
                                            : 'NA'}
                            </span>
                        </div>
                        <a className="play_btn" onClick={() => handlePlay(podcast)} title="Click to Play">Play</a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Podcast;
