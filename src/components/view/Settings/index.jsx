import React from 'react';
import Layout from '../Layout';

const Settings = () => (
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
                <form id="settings-form">
                  <div className="form-control">
                    <div className="col-2">
                      <label htmlFor="username">Username</label>
                    </div>
                    <div className="col-10">
                      <input type="text" value="@username" id="username" disabled />
                    </div>
                  </div>
                  <div className="form-control">
                    <div className="col-2">
                      <label htmlFor="email">Email Address</label>
                    </div>
                    <div className="col-10">
                      <input type="email" value="johndoe@email.com" id="email" disabled />
                    </div>
                  </div>
                  <div className="form-control">
                    <div className="col-2">
                      <label htmlFor="firstname">Name</label>
                    </div>
                    <div className="col-10">
                      <div className="row">
                        <div className="column pr-4">
                          <input type="text" name="firstname" value="John" id="firstname" />
                        </div>
                        <div className="column pl-4 pr-4">
                          <input type="text" name="lastname" value="Doe" id="lastname" />
                        </div>
                      </div>
                      <div className="row">
                        <input type="text" name="othernames" id="othernames" placeholder="Other names" />
                      </div>
                    </div>
                  </div>
                  <div className="form-control">
                    <div className="col-2">
                      <label htmlFor="phonenumber">Phone number</label>
                    </div>
                    <div className="col-10">
                      <input type="text" name="phoneNumber" id="phonenumber" value="07012345678" />
                    </div>
                  </div>
                  <div className="form-control">
                    <div className="col-2">
                      <label htmlFor="bio">Summary (Bio)</label>
                    </div>
                    <div className="col-10">
                      <textarea name="bio" id="bio" placeholder="a short bio of yourself">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam assumenda doloremque ab! Enim debitis soluta dignissimos illum veritatis cumque non.</textarea>
                    </div>
                  </div>
                  <div className="form-control">
                    <div className="col-2">
                      <label htmlFor="title">Profile Image</label>
                    </div>
                    <div className="col-10">
                      <div className="row middle">
                        <div className="profile-image">
                          <img src="img/avatar.jpg" alt="avatar" />
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
                        <input type="radio" name="gender" value="male" />
                        Male
                      </label>
                      <label>
                        <input type="radio" name="gender" value="female" />
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

export default Settings;
