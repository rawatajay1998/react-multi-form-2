import React from "react";

const StepBar = () => {
  return (
    <div className="steps">
      <div className="step-1 step active">
        <span className="count">1</span>
        <p>Your Profile</p>
      </div>
      <div className="step-2 step">
        <span className="count">2</span>
        <p>Business Information</p>
      </div>
    </div>
  );
};

export default StepBar;
