import { render, waitFor } from '@testing-library/react';
import Playlist from './Playlist';

describe('Playlist component', () => {
    test('Check if songs have artist and year', async () => {
        const { getByText } = render(<Playlist />);

        await waitFor(() => getByText('Curated Songs'));
        const songsContainer = getByText('Curated Songs').closest('.songs_container');
        const songs = songsContainer.querySelectorAll('.song_item');
        songs.forEach(song => {
            const artist = song.querySelector('.artist').textContent;
            const year = song.querySelector('.year').textContent;
            expect(artist).toBeTruthy();
            expect(parseInt(year)).toBeGreaterThan(0);
        });
    });

    test('Check if podcasts have episode title or episode number', async () => {
        const { getByText } = render(<Playlist />);

        await waitFor(() => getByText('Curated Podcasts'));
        const podcastsContainer = getByText('Curated Podcasts').closest('.podcasts_container');
        const podcasts = podcastsContainer.querySelectorAll('.podcast_item');
        podcasts.forEach(podcast => {
            const episodeTitle = podcast.querySelector('.episodeTitle').textContent;
            const episodeNumber = podcast.querySelector('.episodeNumber').textContent;
            expect(episodeTitle || episodeNumber).toBeTruthy();
        });
    });
});
