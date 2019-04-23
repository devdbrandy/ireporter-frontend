import React from 'react';
import Layout from '../Layout';

const Settings = () => (
  <>
    <Layout>
      <div class="container">
        <main id="main">
          <div class="column">
            <div class="panel">
              <div class="panel--heading">
                <h3>Settings</h3>
              </div>
              <div class="panel--body">
                <form id="settings-form">
                  <div class="form-control">
                    <div class="col-2">
                      <label for="username">Username</label>
                    </div>
                    <div class="col-10">
                      <input type="text" value="@username" id="username" disabled />
                    </div>
                  </div>
                  <div class="form-control">
                    <div class="col-2">
                      <label for="email">Email Address</label>
                    </div>
                    <div class="col-10">
                      <input type="email" value="johndoe@email.com" id="email" disabled />
                    </div>
                  </div>
                  <div class="form-control">
                    <div class="col-2">
                      <label for="firstname">Name</label>
                    </div>
                    <div class="col-10">
                      <div class="row">
                        <div class="column pr-4">
                          <input type="text" name="firstname" value="John" id="firstname" />
                        </div>
                        <div class="column pl-4 pr-4">
                          <input type="text" name="lastname" value="Doe" id="lastname" />
                        </div>
                      </div>
                      <div class="row">
                        <input type="text" name="othernames" id="othernames" placeholder="Other names" />
                      </div>
                    </div>
                  </div>
                  <div class="form-control">
                    <div class="col-2">
                      <label for="phonenumber">Phone number</label>
                    </div>
                    <div class="col-10">
                      <input type="text" name="phoneNumber" id="phonenumber" value="07012345678" />
                    </div>
                  </div>
                  <div class="form-control">
                    <div class="col-2">
                      <label for="bio">Summary (Bio)</label>
                    </div>
                    <div class="col-10">
                      <textarea name="bio" id="bio" placeholder="a short bio of yourself">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam assumenda doloremque ab! Enim debitis soluta dignissimos illum veritatis cumque non.</textarea>
                    </div>
                  </div>
                  <div class="form-control">
                    <div class="col-2">
                      <label for="title">Profile Image</label>
                    </div>
                    <div class="col-10">
                      <div class="row middle">
                        <div class="profile-image">
                          <img src="img/avatar.jpg" alt="avatar" />
                        </div>
                        <input type="hidden" name="avatar" id="avatar" />
                        <button type="button" class="btn btn-primary btn-sm ml-20" id="upload-avatar">Upload avatar</button>
                      </div>
                    </div>
                  </div>
                  <div class="form-control">
                    <div class="col-2">
                      <label for="gender">Gender</label>
                    </div>
                    <div class="col-10">
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
                  <div class="row center mt-60">
                    <button type="submit" class="btn btn-primary">Save Settings</button>
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
