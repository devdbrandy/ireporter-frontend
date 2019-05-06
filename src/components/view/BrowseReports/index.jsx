/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { fetchRecordsAction } from '../../../redux/actions/recordsAction';
import Layout from '../Layout';
import Panel from '../Panel';
import Record from '../Record';
import lookupAddress from '../../../utils/lookupAddress';
import { mapLocation } from '../../../utils/helper';

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
    minWidth: '60%',
  }
};

Modal.setAppElement('#root');

export const BrowseReports = (props) => {
  const { fetchRecords, records } = props;
  const [state, setState] = useState({
    fetchedRecords: false,
    modalIsOpen: false,
    record: {},
  });

  useEffect(() => {
    const { fetchedRecords } = state;
    if (!fetchedRecords) {
      fetchRecords(true);
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
      record: data,
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

  /**
   * Runs after modal opens
   *
   * @returns {void}
   */
  const afterModalOpen = async () => {
    const { record: { location } } = state;
    mapLocation(location); // display location on map
    const address = await lookupAddress(location);
    setState({
      ...state,
      record: {
        ...state.record,
        address,
      },
    });
  };

  return (
    <>
      <Layout>
        <Panel title="Browse Reports">
          <div className="records-list">
            <div className="row">
              {(records.length > 0) ? (
                records.map(record => (
                  <Record key={record.id} record={record} openModal={openModal} />
                ))
              ) : 'No records found'}
            </div>
          </div>

          <Modal
            isOpen={state.modalIsOpen}
            onAfterOpen={afterModalOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel=""
          >
            <div className="modal--content">
              <header className="modal--label">
                <h3>Record information</h3>
              </header>
              <div className="modal--body">
                <div id="map" />
                <span className="location">
                  <i className="fas fa-map-marker-alt" />
                  {' '}
                  <span className="text">{state.record.address}</span>
                </span>
                <div className="title">
                  <h4>{state.record.title || ''}</h4>
                </div>
                <p className="comment mt-10">{state.record.comment || ''}</p>
                <div className="media">
                  <h6>Media</h6>
                  <div className="row gallery">
                    <div className="row tabs">
                      {state.record.images ? (
                        state.record.images.map((image, index) => (
                          <div key={index} className="col-20">
                            <img src={image} alt="preview" />
                          </div>
                        ))
                      ) : 'No media available'}
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

BrowseReports.propTypes = {
  records: PropTypes.array.isRequired,
  fetchRecords: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  records: state.records.records,
});

const mapDispatchToProps = ({
  fetchRecords: published => fetchRecordsAction(published),
});

export default connect(mapStateToProps, mapDispatchToProps)(BrowseReports);
