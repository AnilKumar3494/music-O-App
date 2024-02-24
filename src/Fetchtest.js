import React, { useState, useEffect } from 'react';

const Fetchtest = () => {
    const [tracks, setTracks] = useState(null); // Initialize tracks state to null

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://anilkumar3494.github.io/host-json/myTracks.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const fetchedTracks = data.tracks;
                console.log(fetchedTracks)
                setTracks(fetchedTracks); // Update tracks state with fetched data
            } catch (error) {
                console.error('There was a problem with fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {tracks && <div>{tracks[0].title}</div>}
        </div>
    );
};

export default Fetchtest;
