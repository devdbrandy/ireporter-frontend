/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-first-prop-new-line */
import React, { useState, useEffect } from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import Layout from '../Layout';
import Panel from '../Panel';
import { updateRecordAction } from '../../../redux/actions/recordAction';
import CloudinaryWidget from '../../container/CloudinaryWidget';
import { logger } from '../../../utils/helper';
import { incidentStatuses } from '../../../utils/constants';

let widget;

const suggestionStyle = {
  backgroundColor: '#ffffff',
  cursor: 'pointer',
  padding: '1em',
  fontSize: '1.2em',
};

const activeSuggestionStyle = {
  ...suggestionStyle,
  backgroundColor: '#fafafa',
};

export const EditRecord = (props) => {
  const initialState = {
    type: 'red-flags',
    title: '',
    comment: '',
    location: '',
    status: 'draft',
    media: [],
    address: '',
    mediaList: [],
    fetchRecord: false,
  };
  const [state, setState] = useState(initialState);
  const { isAdmin } = props;

  useEffect(() => {
    const { fetchRecord } = state;
    if (!fetchRecord) {
      const {
        match: { params: { id } },
        records,
      } = props;
      const record = records.find(item => item.id === parseInt(id, 10));
      setState({
        ...state,
        ...record,
        fetchRecord: true
      });
    }
  });

  /**
   * Handles input field change
   *
   * @param {Event} event - The Event object
   * @returns {void}
   */
  const handleFieldChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  /**
   * Handles location input change
   *
   * @param {string} address - The location's address
   * @returns {void}
   */
  const handleChange = (address) => {
    setState({
      ...state,
      address,
    });
  };

  /**
   * Handles suggested location selection
   *
   * @param {string} address - The suggested address
   * @returns {void}
   */
  const handleSelect = (address) => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        const location = `${lat},${lng}`;
        setState({ ...state, location, address });
      })
      .catch(error => logger.error(error));
  };

  /**
   * Handles form submission
   *
   * @param {Event} event - The Event object
   * @returns {void}
   */
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { updateRecord } = props;
    const { type, id } = state;
    updateRecord(type, id, state);
  };

  /**
   * Collect the uploaded media url
   *
   * @param {string} image - The media url
   * @param {string} filename - Original filename
   * @returns {void}
   */
  const collectMediaUpload = (image, filename) => {
    state.media.push(image);
    state.mediaList.push(filename);
    setState({ ...state });
  };

  /**
   * Activate cloudinary upload widget
   *
   * @returns {void}
   */
  const handleMediaUpload = () => {
    if (widget === undefined) {
      widget = new CloudinaryWidget(collectMediaUpload, () => {}, false);
    }
    widget.open();
  };

  return (
    <>
      <Layout>
        <Panel title="Update Record">
          <form onSubmit={handleFormSubmit} id="create-record-form">
            <div className="form-control">
              <div className="col-2">
                <label htmlFor="#">Record Type</label>
              </div>
              <div className="col-10">
                <label>
                  <input
                    type="radio"
                    name="type"
                    value="red-flags"
                    checked={state.type === 'red-flag'}
                    onChange={event => handleFieldChange(event)}
                  />
                  Red Flag
                </label>
                <label>
                  <input
                    type="radio"
                    name="type"
                    value="interventions"
                    checked={state.type === 'intervention'}
                    onChange={event => handleFieldChange(event)}
                  />
                  Intervention
                </label>
              </div>
            </div>
            <div className="form-control">
              <div className="col-2">
                <label htmlFor="title">Short Title</label>
              </div>
              <div className="col-10">
                <input
                  type="text"
                  name="title"
                  placeholder="Enter a short title"
                  id="title"
                  value={state.title}
                  onChange={event => handleFieldChange(event)}
                />
              </div>
            </div>
            <div className="form-control">
              <div className="col-2">
                <label htmlFor="comment">Comment</label>
              </div>
              <div className="col-10">
                <textarea
                  name="comment"
                  placeholder="Enter record comment"
                  id="comment"
                  value={state.comment}
                  onChange={event => handleFieldChange(event)}
                />
              </div>
            </div>
            <div className="form-control">
              <div className="col-2">
                <label htmlFor="geoautocomplete">Location</label>
              </div>
              <PlacesAutocomplete
                value={state.address}
                onChange={handleChange}
                onSelect={handleSelect}
              >
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                  loading
                }) => (
                  <div className="col-10">
                    <input
                      {...getInputProps({
                        placeholder: 'Enter event location ...',
                        className: 'location-search-input',
                        name: 'address',
                      })}
                    />
                    <div className="autocomplete-dropdown-container"
                      style={{ border: suggestions.length ? '1px solid #ccc' : '' }}>
                      {loading && <div><i className="fas fa-spinner fa-spin fa-lg" /></div>}
                      {suggestions.map((suggestion, index) => {
                        const className = suggestion.active
                          ? 'suggestion-item--active'
                          : 'suggestion-item';
                        const style = suggestion.active
                          ? activeSuggestionStyle
                          : suggestionStyle;
                        return (
                          <div key={index}
                            {...getSuggestionItemProps((suggestion), {
                              className,
                              style,
                            })}
                          >
                            <span>{suggestion.description}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
            </div>
            <div className="form-control">
              <div className="col-2" />
              <div className="col-10">
                <div className="upload-btn-wrapper">
                  <label>
                    <button id="upload-widget" className="cloudinary-button" type="button" onClick={handleMediaUpload}>
                      <i className="fas fa-paperclip" />
                    </button>
                    <input type="hidden" name="media" id="media" value="[]" />
                    {' '}
                    <small>Upload media files</small>
                  </label>
                </div>
                <ul className="media-list">
                  {state.mediaList ? (
                    state.mediaList.map((filename, index) => (
                      <li key={index}>{filename}</li>
                    ))
                  ) : ''}
                </ul>
              </div>
            </div>
            <div className="form-control">
              <div className="col-2">
                <label htmlFor="status">Status</label>
              </div>
              <div className="col-10">
                {incidentStatuses.map((incidentStatus, key) => (
                  key > 1 && !isAdmin ? null : (
                    <label key={key}>
                      <input
                        type="radio"
                        name="status"
                        value={incidentStatus}
                        checked={
                          (
                            incidentStatuses.indexOf(state.status) > 1
                              && !isAdmin
                              && incidentStatus === 'published'
                          )
                          || state.status === incidentStatus
                        }
                        onChange={event => handleFieldChange(event)}
                        disabled={incidentStatuses.indexOf(state.status) > 1 && !isAdmin}
                      />
                      {incidentStatus}
                    </label>
                  )
                ))}
              </div>
            </div>

            <div className="row end mt-60">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={incidentStatuses.indexOf(state.status) > 1}>
                Update record
              </button>
            </div>
          </form>
        </Panel>
      </Layout>
    </>
  );
};

EditRecord.propTypes = {
  updateRecord: PropType.func.isRequired,
  records: PropType.array.isRequired,
  isAdmin: PropType.bool.isRequired,
};

const mapStateToProps = state => ({
  records: state.records.userRecords,
  isAdmin: state.auth.user.isAdmin,
});

const mapDispatchToProps = ({
  updateRecord: (type, id, payload) => updateRecordAction(type, id, payload),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditRecord);
