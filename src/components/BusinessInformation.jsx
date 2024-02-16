import React, { useState } from "react";
import ButtonWrapper from "./ButtonWrapper";
import StepBar from "./StepBar";

const BusinessInformation = ({ step, setStep }) => {
  const [fileUploadError, setFileUploadError] = useState(false);
  const [isSuccess, setIsSuccess] = useState("");
  const [generalInformation, setGeneralInforamtion] = useState({
    brandName: {
      value: "",
      isFilled: false,
    },
    brandType: {
      value: "",
      isFilled: false,
    },
    streetAddress: {
      value: "",
      isFilled: false,
    },
    city: {
      value: "",
      isFilled: false,
    },
    zipCode: {
      value: "",
      isFilled: false,
    },
    idNumber: {
      value: "",
      isFilled: false,
    },
  });
  const [showErrors, setShowErrors] = useState(false);

  const { brandName, brandType, zipCode, city, streetAddress, idNumber } =
    generalInformation;

  // On updaing input fields
  const onUpdatehandler = (e) => {
    setGeneralInforamtion({
      ...generalInformation,
      [e.target.name]: {
        value: e.target.value,
        isFilled: e.target.value === "" ? false : true,
      },
    });
  };

  // On Uploading file
  const onFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    const fileSize =
      selectedFile && Math.round((e.target.files[0].size / 1024) * 1000);
    const allowedTypes = ["application/pdf"];
    const maxFileSize = 1000000;
    const minFileSize = 100000;

    if (
      !allowedTypes.includes(selectedFile?.type) ||
      fileSize < minFileSize ||
      fileSize > maxFileSize
    ) {
      setFileUploadError(true);
      setIsSuccess("failure");
      return;
    }
    setFileUploadError(false);
    setIsSuccess("success");
  };

  const onSubmitHandler = () => {
    const checkedArr = [
      generalInformation.brandName.isFilled,
      generalInformation.brandType.isFilled,
      generalInformation.zipCode.isFilled,
      generalInformation.streetAddress.isFilled,
      generalInformation.city.isFilled,
      generalInformation.idNumber.isFilled,
    ];

    if (checkedArr.includes(false)) {
      setShowErrors(true);
      return;
    }

    localStorage.setItem(
      "Business Information",
      JSON.stringify(generalInformation)
    );
    setStep(3);
  };

  console.log(step);

  return (
    <>
      <StepBar />
      <div className="wrapper business-information">
        <div className="heading-wrapper">
          <p className="preheading">Step 2</p>
          <h2>Business Information</h2>
          <p className="subheading">
            Please enter information about your company
          </p>
        </div>

        <form>
          <h4>GENERAL INFORMATION</h4>
          <div className="general-information">
            <div className="field-block">
              <label>Brand Name</label>
              <input
                className={
                  showErrors && generalInformation.brandName.isFilled === false
                    ? "notFilled"
                    : ""
                }
                value={brandName.value}
                onChange={onUpdatehandler}
                type="text"
                name="brandName"
              />
              <p className="errMsg">Please enter Brand Name</p>
            </div>
            <div className="field-block">
              <label>Brand Type</label>
              <input
                className={
                  showErrors && generalInformation.brandType.isFilled === false
                    ? "notFilled"
                    : ""
                }
                value={brandType.value}
                onChange={onUpdatehandler}
                type="text"
                name="brandType"
              />
              <p className="errMsg">Please enter Brand Type</p>
            </div>

            <div className="field-block">
              <label>Street Address</label>
              <input
                className={
                  showErrors &&
                  generalInformation.streetAddress.isFilled === false
                    ? "notFilled"
                    : ""
                }
                value={streetAddress.value}
                onChange={onUpdatehandler}
                type="text"
                name="streetAddress"
              />
              <p className="errMsg">Please enter your Street Address</p>
            </div>
            <div className="field-block">
              <label>City</label>
              <input
                className={
                  showErrors && generalInformation.city.isFilled === false
                    ? "notFilled"
                    : ""
                }
                name="city"
                value={city.value}
                onChange={onUpdatehandler}
                type="text"
              />
              <p className="errMsg">Please enter your City</p>
            </div>
            <div className="field-block">
              <label>Zip Code</label>
              <input
                className={
                  showErrors && generalInformation.zipCode.isFilled === false
                    ? "notFilled"
                    : ""
                }
                value={zipCode.value}
                onChange={onUpdatehandler}
                type="text"
                name="zipCode"
              />
              <p className="errMsg">Please enter City Zipcode</p>
            </div>
            <div className="field-block">
              <label>Tap ID Number</label>
              <input
                className={
                  showErrors && generalInformation.idNumber.isFilled === false
                    ? "notFilled"
                    : ""
                }
                value={idNumber.value}
                onChange={onUpdatehandler}
                type="text"
                name="idNumber"
              />
              <p className="errMsg">Please enter your ID Number</p>
            </div>
          </div>
          <div className="documents">
            <h4>DOCUMENTS</h4>
            <p>
              Once the following documents are signed, you'll be ready to get
              started
            </p>
          </div>
          <div className="coi-pdf-upload">
            <h4>COI PDF UPLOAD</h4>
            <p>
              Once the following documents are signed, you will be ready to get
              started
            </p>
            <div className="form-field">
              <div className="fileUploadBlock">
                {isSuccess === "success" && (
                  <img
                    className="uploadSign success"
                    src={window.location.origin + "/check.png"}
                  />
                )}
                {isSuccess === "failure" && (
                  <img
                    className="uploadSign failure"
                    src={window.location.origin + "/multiply.png"}
                  />
                )}
                <label>Electronically sign the agreement(s)</label>
              </div>
              <div className="btn-block">
                <input id="fileUpload" type="file" onChange={onFileUpload} />
              </div>
            </div>
            <p className="errMsg">
              {fileUploadError &&
                "Please upload file size betwwen 100 kb to 1mb"}
            </p>
          </div>
        </form>
      </div>
      <ButtonWrapper
        step={step}
        setStep={setStep}
        onSubmitHandler={onSubmitHandler}
      />
    </>
  );
};

export default BusinessInformation;
