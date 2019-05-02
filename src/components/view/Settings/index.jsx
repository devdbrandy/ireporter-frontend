import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import Layout from '../Layout';
import { profileUpdateAction } from '../../../redux/actions/profileAction';

/**
 * A function representing Settings Component
 *
 * @param {object} props - The component props
 * @returns {JSX.Element} DOM elements
 */
export const Settings = (props) => {
  const { user, updateProfile } = props;
  const initialState = {
    firstname: user.firstname,
    lastname: user.lastname,
    othernames: user.othernames,
    phoneNumber: user.phoneNumber,
    email: user.email,
    username: user.username,
    avatar: user.avatar,
    gender: user.gender,
  };
  const [profileData, setProfileData] = useState(initialState);

  const handleFieldChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const userId = user.id;
    updateProfile(userId, profileData);
  };

  return (
    <>
      <Layout>
        <div className="container">
          <main id="main">
            <div className="column">
              <div className="panel">
                <div className="panel--heading">
                  <h3>Settings</h3>
                </div>
                <div className="panel--body">
                  <form id="settings-form" onSubmit={handleFormSubmit}>
                    <div className="form-control">
                      <div className="col-2">
                        <label htmlFor="username">Username</label>
                      </div>
                      <div className="col-10">
                        <input
                          type="text"
                          defaultValue={profileData.username}
                          id="username"
                          disabled
                        />
                      </div>
                    </div>
                    <div className="form-control">
                      <div className="col-2">
                        <label htmlFor="email">Email Address</label>
                      </div>
                      <div className="col-10">
                        <input
                          type="email"
                          defaultValue={profileData.email}
                          id="email"
                          disabled
                        />
                      </div>
                    </div>
                    <div className="form-control">
                      <div className="col-2">
                        <label htmlFor="firstname">Name</label>
                      </div>
                      <div className="col-10">
                        <div className="row">
                          <div className="column pr-4">
                            <input
                              type="text"
                              name="firstname"
                              defaultValue={profileData.firstname}
                              id="firstname"
                              onChange={event => handleFieldChange(event)}
                            />
                          </div>
                          <div className="column pl-4 pr-4">
                            <input
                              type="text"
                              name="lastname"
                              defaultValue={profileData.lastname}
                              id="lastname"
                              onChange={event => handleFieldChange(event)}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <input
                            type="text"
                            name="othernames"
                            id="othernames"
                            placeholder="Other names"
                            defaultValue={profileData.othernames}
                            onChange={event => handleFieldChange(event)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-control">
                      <div className="col-2">
                        <label htmlFor="phonenumber">Phone number</label>
                      </div>
                      <div className="col-10">
                        <input
                          type="text"
                          name="phoneNumber"
                          id="phonenumber"
                          defaultValue={profileData.phoneNumber}
                          onChange={event => handleFieldChange(event)}
                        />
                      </div>
                    </div>
                    <div className="form-control">
                      <div className="col-2">
                        <label htmlFor="bio">Summary (Bio)</label>
                      </div>
                      <div className="col-10">
                        <textarea
                          name="bio"
                          id="bio" placeholder="a short bio of yourself"
                          defaultValue={profileData.bio}
                          onChange={event => handleFieldChange(event)}
                        />
                      </div>
                    </div>
                    <div className="form-control">
                      <div className="col-2">
                        <label htmlFor="title">Profile Image</label>
                      </div>
                      <div className="col-10">
                        <div className="row middle">
                          <div className="profile-image">
                            <img src={profileData.avatar} alt="avatar" />
                          </div>
                          <input type="hidden" name="avatar" id="avatar" />
                          <button type="button" className="btn btn-primary btn-sm ml-20" id="upload-avatar">Upload avatar</button>
                        </div>
                      </div>
                    </div>
                    <div className="form-control">
                      <div className="col-2">
                        <label htmlFor="gender">Gender</label>
                      </div>
                      <div className="col-10">
                        <label>
                          <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={profileData.gender === 'male'}
                            onChange={event => handleFieldChange(event)} />
                          Male
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={profileData.gender === 'female'}
                            onChange={event => handleFieldChange(event)} />
                          Female
                        </label>
                      </div>
                    </div>
                    <div className="row center mt-60">
                      <button type="submit" className="btn btn-primary">Save Settings</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </div>
      </Layout>
    </>
  );
};

Settings.propTypes = {
  user: PropType.object.isRequired,
  updateProfile: PropType.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = ({
  updateProfile: (userId, payload) => profileUpdateAction(userId, payload),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
