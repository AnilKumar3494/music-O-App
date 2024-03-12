import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Statussong from './Statussongs';

describe('Statussong component', () => {
    const mockProps = {
        currentPlaying: {
            title: 'Test Song',
            artist: 'Test Artist'
        },
        isPlaying: true,
        playNext: jest.fn(),
        playPrev: jest.fn(),
        playPause: jest.fn(),
        shuffled: jest.fn()
    };

    it('renders correctly with current playing song details', () => {
        const { getByText } = render(<Statussong {...mockProps} />);
        expect(getByText('Playing: Test Song by Test Artist')).toBeInTheDocument();
    });

    it('displays correct button text when playing', () => {
        const { getByText } = render(<Statussong {...mockProps} />);
        expect(getByText('Pause')).toBeInTheDocument();
    });

    it('displays correct button text when paused', () => {
        const { getByText, rerender } = render(<Statussong {...mockProps} isPlaying={false} />);
        rerender(<Statussong {...mockProps} isPlaying={false} />);
        expect(getByText('Play')).toBeInTheDocument();
    });

    it('calls playPause function when play/pause button is clicked', () => {
        const { getByText } = render(<Statussong {...mockProps} />);
        fireEvent.click(getByText('Pause'));
        expect(mockProps.playPause).toHaveBeenCalledTimes(1);
    });
});
