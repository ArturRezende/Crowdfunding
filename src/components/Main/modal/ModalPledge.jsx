import React from "react";

const ModalPledge = (props) => {
  return (
    <div className="modal__card">
      <div className="modal__card-title">
        <button className="modal__card-choose">
          .<span className="btn-check">.</span>
        </button>
        <h3>Pledge with no reward</h3>
      </div>
      <div className="modal__card-body">
        <div className="modal__card-description">
          <p className="modal__pledge-text">
            Choose to support us without a reward if you simply believe in our
            project. As a backer, you will be signed up to receive product
            updates via email.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalPledge;
