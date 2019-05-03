/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import Modal from 'react-modal';
import { Link, Redirect } from 'react-router-dom';
import Layout from '../../view/Layout';
import Panel from '../../view/Panel';
import { fetchRecordsAction } from '../../../redux/actions/recordsAction';
import { deleteRecordAction, updateRecordStatusAction } from '../../../redux/actions/recordAction';
import { getName } from '../../../utils/helper';

import '../../../styles/admin.css';

/**
 * A functional component representing the Dashboard
 *
 * @param {object} props - The props object
 * @returns {JSX.Element} DOM Element
 */
export const AdminDashboard = (props) => {
  const { isAdmin, overview } = props;
  const { fetchRecords, records } = props;
  const [state, setState] = useState({
    fetchedRecords: false,
    record: {},
  });

  useEffect(() => {
    const { fetchedRecords } = state;
    if (!fetchedRecords) {
      fetchRecords();
      setState({ ...state, fetchedRecords: true });
    }
  });

  /**
   * Handles record delete
   *
   * @param {object} record - The record object
   * @returns {void}
   */
  const handleRecordDelete = (record) => {
    const { deleteRecord } = props;
    const { type, id } = record;
    setState({ ...state, fetchedRecords: false });
    deleteRecord(type, id);
  };

  /**
   * Handles record status update
   *
   * @param {Event} event - The Event object
   * @param {object} record - The record object
   * @returns {void}
   */
  const handleStatusUpdate = (event, { type, id }) => {
    const { updateStatus } = props;
    if (state[id]) {
      updateStatus({
        type,
        id,
        status: state[id],
      });
      setState({ ...state, fetchedRecords: false });
    }

    const icon = event.target;
    icon.classList.add('fa-spin');
    setTimeout(() => {
      icon.classList.remove('fa-spin');
    }, 2000);
  };

  const handleStatusChange = (e, id) => {
    setState({
      ...state,
      [id]: e.target.value,
    });
  };

  if (!isAdmin) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <Layout>
        <Panel title="Dashboard">
          <div className="overview">
            <div className="row">
              <div className="card column">
                <span className="count" id="total-records">
                  {overview.total || 0}
                </span>
                <h5>Total Records</h5>
              </div>
              <div className="card column">
                <span className="count" id="resolved-count">
                  {overview.resolved || 0}
                </span>
                <h5>Resolved</h5>
              </div>
              <div className="card column">
                <span className="count" id="investigation-count">
                  {overview['under-investigation'] || 0}
                </span>
                <h5>Under Investigation</h5>
              </div>
            </div>
          </div>

          <div className="responsive-table">
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Type</th>
                  <th>Created By</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody id="record-list">
                {records.map((record) => {
                  const {
                    id,
                    type,
                    title,
                    status,
                  } = record;

                  return (
                    <tr key={id}>
                      <td>{title}</td>
                      <td><span className={`tag tag-${type}`}>{type}</span></td>
                      <td>{getName(record.author)}</td>
                      <td>
                        <div className="wrapper">
                          <select
                            defaultValue={status} className="record-status"
                            onChange={e => handleStatusChange(e, id)}>
                            <option value="draft">draft</option>
                            <option value="published">published</option>
                            <option value="under-investigation">under-investigation</option>
                            <option value="resolved">resolved</option>
                            <option value="rejected">rejected</option>
                          </select>
                          <a
                            className="action-sync"
                            title="sync update"
                            onClick={event => handleStatusUpdate(event, record)}>
                            <i className="fas fa-sync-alt" />
                          </a>
                        </div>
                      </td>
                      <td>
                        <div className="wrapper">
                          <button type="button" className="btn btn-info action-btn view">
                            <i className="far fa-eye" />
                            <span className="text">View</span>
                          </button>
                          <Link to={`/edit/record/${id}`} className="btn btn-success action-btn edit">
                            <i className="far fa-edit" />
                            <span className="text">Edit</span>
                          </Link>
                          <button
                            type="button"
                            className="btn btn-danger action-btn delete"
                            onClick={() => handleRecordDelete(record)}>
                            <i className="far fa-trash-alt" />
                            <span className="text">Delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="preload">
            <div className="preloader hide" />
          </div>
        </Panel>
      </Layout>
    </>
  );
};

AdminDashboard.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  fetchRecords: PropTypes.func.isRequired,
  records: PropTypes.array.isRequired,
  deleteRecord: PropTypes.func.isRequired,
  updateStatus: PropTypes.func.isRequired,
  overview: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  isAdmin: state.auth.user.isAdmin,
  records: state.records.userRecords,
  overview: state.records.overview,
});

const mapDispatchToProps = ({
  fetchRecords: () => fetchRecordsAction(),
  deleteRecord: (type, id) => deleteRecordAction(type, id),
  updateStatus: payload => updateRecordStatusAction(payload),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
