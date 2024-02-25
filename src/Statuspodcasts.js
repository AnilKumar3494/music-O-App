import React from 'react';

const Statuspodcasts = ({ currentPlaying, isPlaying, playNext, playPrev, playPause, shuffled }) => {
    return (
        <div className='playing'>
            {currentPlaying && (
                <p className='current_song'>
                    {isPlaying ? `Playing: ${currentPlaying.episodeTitle}` : 'Paused'}
                    {isPlaying && (
                        <span>
                            {currentPlaying.season && currentPlaying.episode
                                ? `, Season: ${currentPlaying.season}, Episode: ${currentPlaying.episode}`
                                : currentPlaying.season
                                    ? `, Season: ${currentPlaying.season}`
                                    : currentPlaying.episode
                                        ? `, Episode: ${currentPlaying.episode}`
                                        : ''}
                        </span>
                    )}
                </p>
            )}
            <div className='buttons_container'>
                <button className='play_pause_btn' onClick={playPause} title={isPlaying ? 'Pause' : 'Play'}>{isPlaying ? 'Pause' : 'Play'}</button>

                <button className='prev_btn' onClick={playPrev} title='Previous'>Previous</button>
                <button className='shuffle_btn' onClick={shuffled} title='Shuffle'>Shuffle</button>
                <button className='next_btn' onClick={playNext} title='Next'>Next</button>
            </div>
        </div>
    );
};

export default Statuspodcasts;
