import React from 'react';

const Statussong = ({ currentPlaying, isPlaying, playNext, playPrev, playPause, shuffled }) => {
    const playPauseButtonText = isPlaying ? 'Pause' : 'Play';

    return (
        <div className='playing'>
            {currentPlaying && (
                <p className='current_song'>{isPlaying ? `Playing: ${currentPlaying.title} by ${currentPlaying.artist}` : "Paused"}</p>
            )}
            <div className='buttons_container'>
                <button className='play_pause_btn' onClick={playPause} title={playPauseButtonText}>{playPauseButtonText}</button>

                <button className='prev_btn' onClick={playPrev} title='Previous Song'>Previous</button>
                <button className='shuffle_btn' onClick={shuffled} title='Shuffle Songs'>Shuffle</button>
                <button className='next_btn' onClick={playNext} title='Next Song'>Next</button>
            </div>
        </div>
    );
};

export default Statussong;
