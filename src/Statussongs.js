import React from 'react';

const Statussong = ({ currentPlaying, isPlaying, playNext, playPrev, playPause, shuffled }) => {
    return (
        <div className='playing'>
            {currentPlaying && (
                <p className='current_song'>{isPlaying ? `Playing: ${currentPlaying.title} by ${currentPlaying.artist}` : "Paused"}</p>
            )}
            <div className='buttons_container'>
                <button className='play_pause_btn' onClick={playPause}>{isPlaying ? 'Pause' : 'Play'}</button>

                <button className='prev_btn' onClick={playPrev}>Previous</button>
                <button className='shuffle_btn' onClick={shuffled}>Shuffle</button>
                <button className='next_btn' onClick={playNext}>Next</button>
            </div>
        </div>
    );
};

export default Statussong;
