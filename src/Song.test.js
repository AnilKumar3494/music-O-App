import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Song from './Song';

describe('Song component', () => {
    const songsArray = [
        { title: 'Song 1', artist: 'Artist 1', year: '2020' },
        { title: 'Song 2', artist: 'Artist 2', year: '2021' }
    ];

    const setCurrentPlaying = jest.fn();
    const setIsPlaying = jest.fn();

    test('renders song details correctly', () => {
        const { getByText } = render(
            <Song
                songsArray={songsArray}
                currentPlaying={null}
                setCurrentPlaying={setCurrentPlaying}
                setIsPlaying={setIsPlaying}
            />
        );

        expect(getByText('Song 1')).toBeInTheDocument();
        expect(getByText('Artist 1')).toBeInTheDocument();
        expect(getByText('2020')).toBeInTheDocument();

        expect(getByText('Song 2')).toBeInTheDocument();
        expect(getByText('Artist 2')).toBeInTheDocument();
        expect(getByText('2021')).toBeInTheDocument();
    });

    test('double clicking song triggers handleDoubleClick', () => {
        const { getByText } = render(
            <Song
                songsArray={songsArray}
                currentPlaying={null}
                setCurrentPlaying={setCurrentPlaying}
                setIsPlaying={setIsPlaying}
            />
        );

        fireEvent.doubleClick(getByText('Song 1'));

        expect(setCurrentPlaying).toHaveBeenCalledTimes(1);
        expect(setIsPlaying).toHaveBeenCalledTimes(1);
    });
});
