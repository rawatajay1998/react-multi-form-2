import React, { useState } from "react";
import ProfileInformation from "./ProfileInformation";
import BusinessInformation from "./BusinessInformation";
import ThankYou from "./ThankYou";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  return (
    <>
      <div className="multi-step-form">
        {step === 1 && <ProfileInformation step={step} setStep={setStep} />}
        {step === 2 && <BusinessInformation step={step} setStep={setStep} />}
        {step === 3 && <ThankYou />}
      </div>
    </>
  );
};

export default MultiStepForm;
