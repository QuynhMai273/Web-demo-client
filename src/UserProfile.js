import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserProfile = () => {
    const { username } = useParams();
    const navigate = useNavigate();
    const [description, setDescription] = useState('');

    useEffect(() => {
        const fetchUserDescription = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}user/${username}`);
                setDescription(response.data.description);
            } catch (error) {
                console.error(error);
                alert('Error fetching user description');
            }
        };

        fetchUserDescription();
    }, [username]);

    const handleLogout = () => {
        navigate('/'); // Redirect to login page
    };

    return (
        <div className="container">
            <h2>User Profile</h2>
            <p>Welcome, {username}!</p>
            {description && <p>Description: {description}</p>}
            <button onClick={handleLogout}>Log Out</button>
        </div>
    );
};

export default UserProfile;
