import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Podcast from './Podcast';

describe('Podcast component', () => {
    const podcastsArray = [
        { episodeTitle: 'Episode 1', season: 1, episode: 1 },
        { episodeTitle: 'Episode 2', season: 1, episode: 2 },
        { episodeTitle: 'Episode 3', season: 2, episode: 1 }
    ];

    const currentPlaying = podcastsArray[0];
    const setCurrentPlaying = jest.fn();
    const setIsPlaying = jest.fn();

    it('renders correctly', () => {
        const { getByText } = render(
            <Podcast
                podcastsArray={podcastsArray}
                currentPlaying={currentPlaying}
                setCurrentPlaying={setCurrentPlaying}
                setIsPlaying={setIsPlaying}
            />
        );

        expect(getByText('Episode 1')).toBeInTheDocument();
        expect(getByText('Season: 1, Episode: 1')).toBeInTheDocument();

    });



    it('calls setCurrentPlaying and setIsPlaying when playlist bar is double-clicked', () => {
        const { getByText } = render(
            <Podcast
                podcastsArray={podcastsArray}
                currentPlaying={currentPlaying}
                setCurrentPlaying={setCurrentPlaying}
                setIsPlaying={setIsPlaying}
            />
        );

        fireEvent.doubleClick(getByText('Episode 1'));

        expect(setCurrentPlaying).toHaveBeenCalledWith(currentPlaying);
        expect(setIsPlaying).toHaveBeenCalledWith(true);
    });
});
