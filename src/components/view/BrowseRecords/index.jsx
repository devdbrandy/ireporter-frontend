import React from 'react';
import Layout from '../Layout';
import Panel from '../Panel';
import Record from '../Record';

const BrowseRecords = () => (
  <>
    <Layout>
      <Panel title="Browse Records">
        <div className="records-list">
          <div className="row">
            <Record />
          </div>
        </div>
      </Panel>
    </Layout>
  </>
);

export default BrowseRecords;
