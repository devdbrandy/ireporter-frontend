/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-first-prop-new-line */
import React, { useState } from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import Layout from '../Layout';
import { createRecordAction } from '../../../redux/actions/recordAction';
import CloudinaryWidget from '../../container/CloudinaryWidget';
import { logger } from '../../../utils/helper';

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

export const NewRecord = (props) => {
  const initialState = {
    type: 'red-flags',
    title: '',
    comment: '',
    location: '',
    status: 'draft',
    media: [],
    address: '',
    mediaList: [],
  };
  const [formData, setFormData] = useState(initialState);

  /**
   * Handles input field change
   *
   * @param {Event} event - The Event object
   * @returns {void}
   */
  const handleFieldChange = (event) => {
    setFormData({
      ...formData,
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
    setFormData({
      ...formData,
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
        setFormData({ ...formData, location, address });
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
    const { createRecord } = props;
    const { type } = formData;
    createRecord(type, formData, props);
  };

  /**
   * Collect the uploaded media url
   *
   * @param {string} image - The media url
   * @param {string} filename - Original filename
   * @returns {void}
   */
  const collectMediaUpload = (image, filename) => {
    formData.media.push(image);
    formData.mediaList.push(filename);
    setFormData({ ...formData });
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
        <div className="container">
          <main id="main">
            <div className="column">
              <div className="panel">
                <div className="panel--heading">
                  <div className="row">
                    <h3>Add New Record</h3>
                    <div className="column">
                      <div className="row end">
                        <button type="button" className="btn btn-back"><i className="fas fa-reply" /></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel--body">
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
                            checked={formData.type === 'red-flags'}
                            onChange={event => handleFieldChange(event)}
                          />
                          Red Flag
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="type"
                            value="interventions"
                            checked={formData.type === 'interventions'}
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
                          onChange={event => handleFieldChange(event)}
                        />
                      </div>
                    </div>
                    <div className="form-control">
                      <div className="col-2">
                        <label htmlFor="geoautocomplete">Location</label>
                      </div>
                      <PlacesAutocomplete
                        value={formData.address}
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
                                name: 'address'
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
                          {formData.mediaList ? (
                            formData.mediaList.map((filename, index) => (
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
                        <label>
                          <input
                            type="radio"
                            name="status"
                            value="draft"
                            checked={formData.status === 'draft'}
                            onChange={event => handleFieldChange(event)}
                          />
                          Draft
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="status"
                            value="published"
                            checked={formData.status === 'published'}
                            onChange={event => handleFieldChange(event)}
                          />
                          Publish
                        </label>
                      </div>
                    </div>

                    <div className="row end mt-60">
                      <button type="submit" className="btn btn-primary">Create record</button>
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
};

NewRecord.propTypes = {
  createRecord: PropType.func.isRequired,
};

const mapDispatchToProps = ({
  createRecord: (type, payload, props) => createRecordAction(type, payload, props),
});

export default connect(null, mapDispatchToProps)(NewRecord);
