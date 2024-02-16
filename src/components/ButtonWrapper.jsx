import React from "react";

const ButtonWrapper = ({ onSubmitHandler, setStep, step }) => {
  const onPrevHandler = () => {
    setStep(1);
  };

  return (
    <div className="buttons-wrapper">
      <button className="login-btn">
        <svg
          fill="#000000"
          width="24"
          height="24"
          viewBox="-78.5 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>left</title>
          <path d="M257 64L291 98 128 262 291 426 257 460 61 262 257 64Z" />
        </svg>
        Back to Login
      </button>
      <div className="next-prev-block">
        {step === 2 && (
          <button className="prevStep" onClick={onPrevHandler}>
            <svg
              fill="#000000"
              width="24"
              height="24"
              viewBox="-78.5 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>left</title>
              <path d="M257 64L291 98 128 262 291 426 257 460 61 262 257 64Z" />
            </svg>{" "}
            Previous Step
          </button>
        )}
        <button type="button" onClick={onSubmitHandler}>
          Next Step
          <svg
            fill="#000000"
            width="24"
            height="24"
            viewBox="-77 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M98 460L64 426 227 262 64 98 98 64 294 262 98 460Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ButtonWrapper;
