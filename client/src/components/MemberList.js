import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './MemberList.css';

const MemberList = () => {
    const [members, setMembers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMembers = async () => {
            const token = localStorage.getItem('token');
            try {
                const response = await axios.get('/api/members', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setMembers(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchMembers();
    }, []);

    return (
        <div className="member-list">
            <h2>Member List</h2>
            <ul>
                {members.map((member) => (
                    <li key={member._id}>{member.name}</li>
                ))}
            </ul>
            <button onClick={() => navigate('/add-member')}>Add New Member</button>
        </div>
    );
};

export default MemberList;
