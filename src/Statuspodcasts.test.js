import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Statuspodcasts from './Statuspodcasts';

test('renders Statuspodcasts component correctly', () => {
    const { getByText } = render(<Statuspodcasts />);

    expect(getByText('Play')).toBeInTheDocument();
    expect(getByText('Previous')).toBeInTheDocument();
    expect(getByText('Shuffle')).toBeInTheDocument();
    expect(getByText('Next')).toBeInTheDocument();
});


test('triggers playPause function when play/pause button is clicked', () => {
    const playPauseMock = jest.fn();
    const { getByText } = render(<Statuspodcasts isPlaying={false} playPause={playPauseMock} />);

    fireEvent.click(getByText('Play'));
    expect(playPauseMock).toHaveBeenCalled();
});

