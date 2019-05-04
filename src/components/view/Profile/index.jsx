import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import moment from 'moment';
import Layout from '../Layout';

export const Profile = (props) => {
  const {
    user: {
      firstname,
      lastname,
      bio,
      avatar,
      registered,
    },
    overview,
  } = props;
  const joinDate = moment(registered).format('MMM Do, YYYY');
  return (
    <>
      <Layout>
        <div className="container">
          <main id="main">
            <div className="column">
              <div className="panel">
                <div className="panel--heading">
                  <h3>Profile</h3>
                </div>
                <div className="panel--body">
                  <div className="user-profile row middle">
                    <div className="user--avatar column center">
                      <img src={avatar} alt="avatar" />
                    </div>
                    <div className="user--detail column center">
                      <h3>
                        {firstname}
                        {' '}
                        {lastname}
                      </h3>
                      <Link to="/settings" className="btn btn-primary edit">Edit Profile</Link>
                      <hr className="dash" />
                      <p className="user--bio">{bio || 'No bio provided.'}</p>
                    </div>
                    <div className="user--stat column center text-center">
                      <div className="wrapper">
                        <span>
                          Joined:
                          {' '}
                          <i className="user--registered">{joinDate}</i>
                        </span>
                        <hr className="dash" />
                        <span>
                          <i className="incident-total">
                            {overview.total}
                          </i>
                          {' '}
                          Incidents Published
                        </span>
                        <span>
                          <i className="incident-resolved">
                            {overview.resolved}
                          </i>
                          {' '}
                          Incidents Resolved
                        </span>
                        <span>
                          <i className="incident-rejected">
                            {overview.rejected}
                          </i>
                          {' '}
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
};

Profile.propTypes = {
  user: PropType.object.isRequired,
  overview: PropType.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.auth.user,
  overview: state.records.overview,
});

export default connect(mapStateToProps)(Profile);
