import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import lookupAddress from '../../../utils/lookupAddress';
import formatDate from '../../../utils/formatDate';

const timeStampStyle = {
  position: 'absolute',
  bottom: 0,
  right: 0,
  padding: '5px',
  fontSize: '1.2rem',
};

const Record = ({ record, openModal }) => {
  const { author, images } = record;
  const [address, setAddress] = useState('');

  const { location } = record;
  const getAddress = async () => {
    const newAddress = await lookupAddress(location);
    return setAddress(newAddress);
  };

  useEffect(() => {
    getAddress();
  }, [address]);

  return (
    <div className="card" onClick={() => openModal(record)}>
      <div className="record-cover">
        <img src={images[0]} alt="cover" />
        <div className="overlay" />
        <span className="author">
          By:
          {' '}
          <span className="name">{`${author.firstname} ${author.lastname}`}</span>
        </span>
        <span style={timeStampStyle}>
          {formatDate(record.createdOn)}
        </span>
        <span className="tag tag-intervention">{record.type}</span>
      </div>
      <div className="record-body">
        <h4 className="record-title">{record.title}</h4>
        <p>{record.comment}</p>
        <span className="location">
          <i className="fas fa-map-marker-alt" />
          {address}
        </span>
      </div>
      <div className="record-status">{record.status}</div>
    </div>
  );
};

Record.propTypes = {
  record: PropTypes.object,
  openModal: PropTypes.func.isRequired,
};

Record.defaultProps = {
  record: {},
};

export default Record;
