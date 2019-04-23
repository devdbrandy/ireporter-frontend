import React from 'react';
import Layout from '../Layout';

const Profile = () => (
  <>
    <Layout>
      <div class="container">
        <main id="main">
          <div class="column">
            <div class="panel">
              <div class="panel--heading">
                <h3>Profile</h3>
              </div>
              <div class="panel--body">
                <div class="user-profile row middle">
                  <div class="user--avatar column center">
                    <img src="img/avatar.jpg" alt="avatar" />
                  </div>
                  <div class="user--detail column center">
                    <h3 />
                    <a href="settings.html" class="btn btn-primary edit">Edit Profile</a>
                    <hr class="dash" />
                    <p class="user--bio">No bio provided.</p>
                  </div>
                  <div class="user--stat column center text-center">
                    <div class="wrapper">
                      <span>
                        Joined:
                        {' '}
                        <i class="user--registered">Dec 3, 2018</i>
                      </span>
                      <hr class="dash" />
                      <span>
                        <i class="incident-total">0</i>
                        Incidents Published
                      </span>
                      <span>
                        <i class="incident-resolved">0</i>
                        Incidents Resolved
                      </span>
                      <span>
                        <i class="incident-rejected">0</i>
                        Incidents Rejected
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  </>
);

export default Profile;
