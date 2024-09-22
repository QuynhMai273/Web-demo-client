import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UserDescription() {
    const { username } = useParams();
    const [description, setDescription] = useState('');

    useEffect(() => {
        const fetchDescription = async () => {
            try {
                const response = await fetch(`http://localhost:5000/description/${username}`);
                if (response.ok) {
                    const data = await response.json();
                    setDescription(data.description);
                } else {
                    alert('Failed to load description.');
                }
            } catch (error) {
                console.error('Error fetching description:', error);
            }
        };

        fetchDescription();
    }, [username]);

    return (
        <div>
            <h1>{username}'s Description</h1>
            <p>{description}</p>
        </div>
    );
}

export default UserDescription;
