import { useState, useEffect } from 'react';
import { Navbar } from '../component/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Profile.css'

export const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [userImage, setUserImage] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const toBack = () => {
    navigate(-1);
  };

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await axios.put(
          '/api/profile/update',
          { username: newUsername, email: newEmail, password:newPassword },
          {
            headers: {
              'Content-Type': 'application/json',
              token: token,
            },
          }
        );
        setUserInfo(response.data.user);
        setUserImage(response.data.user.image);
        setEditMode(false);
      }
    } catch (error) {
      console.error('Error updating user information:', error);
    }
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const response = await axios.post(
            '/api/profile',
            {},
            {
              headers: {
                'Content-Type': 'application/json',
                token: token,
              },
            }
          );
          setUserInfo(response.data.user);
          setUserImage(response.data.user.image);
        }
      } catch (error) {
        console.error('Error fetching user information:', error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <div className="profile-container">
      <Navbar />
      <button className="back-button" type="button" onClick={toBack}>
        Back
      </button>
      <h1 className='title-profile'>User Profile</h1>
      <div className="profile-content">
        {editMode ? (
        <>
          <img className="profile-photo" src={userImage} alt="" />
          <div className="edit-mode">
            <input type="text" value={newUsername} placeholder='New Username' onChange={(e) => setNewUsername(e.target.value)} />
            <br />
            <input type="text" value={newEmail} placeholder='New Email' onChange={(e) => setNewEmail(e.target.value)}/>
            <br />
            <input type="password" value={newPassword} placeholder='New Password' onChange={(e) => setNewPassword(e.target.value)}/>
            <br />
            <button className="update-button" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </>
        ) : (
          <>
            {userInfo ? (
              <>
                <img className="profile-photo" src={userImage} alt="" />
                <div className="user-info">
                  <p>Username: {userInfo.username}</p>
                  <p>Email: {userInfo.email}</p>
                </div>
              </>
            ) : (
              <p>You Need to sign in</p>
            )}
            <button className="edit-button" onClick={() => setEditMode(true)}>
              Edit Profile
            </button>
          </>
        )}
      </div>
    </div>
  );
};