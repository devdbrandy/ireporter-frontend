import React from 'react';

const Record = (props) => {
  return (
    <div className="card">
      <div className="record-cover">
        <img src="img/image.png" alt="cover" />
        <div className="overlay" />
        <span className="author">
          By:
          {' '}
          <span className="name">John Doe</span>
        </span>
        <span className="tag tag-intervention">Intervention</span>
      </div>
      <div className="record-body">
        <h4 className="record-title">Record title</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et totam, eum asperiores optio saepe hic corrupti perferendis earum ab voluptatem.
        </p>
        <span className="location">
          <i className="fas fa-map-marker-alt" />
          234, surulere
        </span>
      </div>
      <div className="record-status">Resolved</div>
    </div>
  );
};

export default Record;
