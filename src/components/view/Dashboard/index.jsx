import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Layout from '../Layout';
import Panel from '../Panel';
import { fetchUserRecords } from '../../../redux/actions/recordsAction';
import formatDate from '../../../utils/formatDate';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    minWidth: '50%',
  }
};

/**
 * A functional component representing the Dashboard
 *
 * @param {object} props - The props object
 * @returns {JSX.Element} DOM Element
 */
const Dashboard = (props) => {
  const { fetchRecords, userId, records } = props;
  const [state, setState] = useState({
    fetchedRecords: false,
    modalIsOpen: false,
    article: {},
  });

  useEffect(() => {
    const { fetchedRecords } = state;
    if (!fetchedRecords) {
      fetchRecords(userId);
      setState({ ...state, fetchedRecords: true });
    }
  });

  /**
   * Triggers modal open
   *
   * @param {object} data - The data to load with modal
   * @returns {void}
   */
  const openModal = (data) => {
    setState({
      ...state,
      modalIsOpen: true,
      article: data,
    });
  };

  /**
   * Triggers modal close
   *
   * @returns {void}
   */
  const closeModal = () => {
    setState({ ...state, modalIsOpen: false });
  };

  return (
    <>
      <Layout>
        <Panel title="Dashboard">
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
              <tbody id="record-list">
                {records.map(record => (
                  <tr key={record.id}>
                    <td className="title">{record.title}</td>
                    <td><span className={`tag tag-${record.type}`}>{record.type}</span></td>
                    <td>{formatDate(record.createdOn)}</td>
                    <td><span className="tag">{record.status}</span></td>
                    <td>
                      <div className="wrapper">
                        <button
                          type="button"
                          className="btn btn-info action-btn view"
                          onClick={() => openModal(record)}>
                          <i className="far fa-eye" />
                          View
                        </button>
                        <a href="#!" className="btn btn-success action-btn edit">
                          <i className="far fa-edit" />
                          <span className="text">Edit</span>
                        </a>
                        <button type="button" className="btn btn-danger action-btn delete">
                          <i className="far fa-trash-alt" />
                          <span className="text">Delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="preload">
            <div className="preloader hide" />
          </div>

          {/* TODO: Add pagination */}


          <Modal
            isOpen={state.modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel=""
          >
            <div className="modal--content">
              <header className="modal--label">
                <h3>Record information</h3>
                <span className="modal-close">
                  <i className="fas fa-times" />
                </span>
              </header>
              <div className="modal--body">
                <div id="map" />
                <span className="location">
                  <i className="fas fa-map-marker-alt" />
                  {' '}
                  <span className="text" />
                </span>
                <div className="title">
                  <h4>{state.article.title || ''}</h4>
                </div>
                <p className="comment mt-10">{state.article.comment || ''}</p>
                <div className="media">
                  <h6>Media</h6>
                  <div className="row gallery">
                    <div className="col-20 tabs" />
                    <div className="col-80 preview">
                      <img id="previewed-img" alt="preview" />
                    </div>
                  </div>
                </div>
              </div>

              <footer className="modal--footer">
                <div className="wrapper">
                  <button
                    type="button"
                    className="btn btn-primary cancel"
                    onClick={closeModal}>
                    close
                  </button>
                </div>
              </footer>
            </div>
          </Modal>
        </Panel>
      </Layout>
    </>
  );
};

Dashboard.propTypes = {
  userId: PropTypes.number.isRequired,
  fetchRecords: PropTypes.func.isRequired,
  records: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  userId: state.auth.user.id,
  records: state.records.userRecords,
});

const mapDispatchToProps = ({
  fetchRecords: userId => fetchUserRecords(userId),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
