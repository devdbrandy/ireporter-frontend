import React from 'react';
import Layout from '../Layout';

const Dashboard = () => (
  <>
    <Layout>
      <div className="container">
      <main id="main">
        <div className="column">
          <div className="panel">
            <div className="panel--heading">
              <h3>Manage Records</h3>
            </div>
            <div className="panel--body">
              <div className="overview">
                <div className="row">
                  <div className="card">
                    <span className="count" id="total-records">0</span>
                    <h5>Total Records</h5>
                  </div>
                  <div className="card">
                    <span className="count" id="investigation-count">0</span>
                    <h5>Under investigation</h5>
                  </div>
                  <div className="card">
                    <span className="count" id="resolved-count">0</span>
                    <h5>Resolved</h5>
                  </div>
                  <div className="card">
                    <span className="count" id="rejected-count">0</span>
                    <h5>Rejected</h5>
                  </div>
                </div>
              </div>

              <hr className="dash" />

              <div className="responsive-table">
                <table id="records-table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Type</th>
                      <th>Created On</th>
                      <th>Status</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody id="record-list" />
                </table>
              </div>

              <div className="preload">
                <div className="preloader hide" />
              </div>

              {/* Pagination */}
              {/* <div className="row">
                <div className="pagination">
                  <a href="#">&laquo;</a>
                  <a className="active" href="#">1</a>
                  <a href="#">&raquo;</a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </main>
    </div>
    </Layout>
  </>
);

export default Dashboard;
