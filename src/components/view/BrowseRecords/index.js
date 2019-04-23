import React from 'react';
import Layout from '../Layout';

const BrowseRecords = () => (
  <>
    <Layout>
      <div className="container">
        <main id="main" className="row">
          <div className="column">
            <div className="panel">
              <div className="panel--heading">
                <h3>Browse Reports</h3>
              </div>
              <div className="panel--body">
                <div className="records-list">
                  <div className="row" />
                </div>

                {/* <div className="row">
                  <div className="pagination">
                    <a href="#">&laquo;</a>
                    <a className="active" href="#">1</a>
                    <a href="#">&raquo;</a>
                  </div>
                </div> */}

                <div className="preload">
                  <div className="preloader hide" />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  </>
);

export default BrowseRecords;
