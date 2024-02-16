import React, { useState } from "react";
import ButtonWrapper from "./ButtonWrapper";
import StepBar from "./StepBar";

const ProfileInformation = ({ step, setStep }) => {
  const [profileInformation, setprofileInformation] = useState({
    firstName: {
      value: "",
      isFilled: false,
    },
    lastName: {
      value: "",
      isFilled: false,
    },
    email: {
      value: "",
      isFilled: false,
    },
    phone: {
      value: "",
      isFilled: false,
    },
    password: {
      value: "",
      isFilled: false,
    },
    confirmPassword: {
      value: "",
      isFilled: false,
    },
  });
  const [showErrors, setShowErrors] = useState(false);
  const [isPasswordSame, setIsPasswordSame] = useState(true);
  const [isPasswordLength, setIsPasswordLength] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const onUpdateHandler = (e) => {
    setprofileInformation({
      ...profileInformation,
      [e.target.name]: {
        value: e.target.value,
        isFilled: e.target.value === "" ? false : true,
      },
    });
  };

  const onSubmitHandler = (e) => {
    let emailRegex = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
    e.preventDefault();

    const checkedArr = [
      profileInformation.firstName.isFilled,
      profileInformation.lastName.isFilled,
      profileInformation.email.isFilled,
      profileInformation.password.isFilled,
      profileInformation.confirmPassword.isFilled,
      profileInformation.phone.isFilled,
    ];

    if (checkedArr.includes(false)) {
      setShowErrors(true);
      return;
    }

    setShowErrors(false);

    // Checking email
    if (emailRegex.test(profileInformation.email.value)) {
      console.log("valid email");
      setIsValidEmail(false);
    } else {
      console.log("invalid email");
      setIsValidEmail(true);
    }

    // Check passwords are same
    if (
      profileInformation.password.value !==
      profileInformation.confirmPassword.value
    ) {
      return setIsPasswordSame(false);
    } else {
      setIsPasswordSame(true);
    }

    // Check passwords length is greater than 8 characters
    if (profileInformation.password.value.length < 8) {
      return setIsPasswordLength(false);
    } else {
      setIsPasswordLength(true);
    }

    localStorage.setItem(
      "Profile Information",
      JSON.stringify(profileInformation)
    );

    setStep((prev) => prev + 1);
  };

  console.log(isValidEmail);

  return (
    <>
      <StepBar />
      <div className="wrapper profile-information">
        <div className="heading-wrapper">
          <p className="preheading">Step 1</p>
          <h2>Your Profile</h2>
          <p className="subheading">
            Enter the login information for your account. You will be able to
            create additional users after registering.
          </p>
        </div>

        <form>
          <div className="input-field">
            <label>First Name</label>
            <input
              type="text"
              className={
                showErrors && profileInformation.firstName.isFilled === false
                  ? "notFilled"
                  : ""
              }
              name="firstName"
              onChange={onUpdateHandler}
              value={profileInformation.firstName.value}
            />
            {showErrors && <p className="errMsg">Please enter First Name</p>}
          </div>
          <div className="input-field">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              className={
                showErrors && profileInformation.lastName.isFilled === false
                  ? "notFilled"
                  : ""
              }
              value={profileInformation.lastName.value}
              onChange={onUpdateHandler}
            />
            {showErrors && <p className="errMsg">Please enter Last Name</p>}
          </div>
          <div className="input-field">
            <label> Email</label>
            <input
              type="email"
              name="email"
              className={
                showErrors && profileInformation.email.isFilled === false
                  ? "notFilled"
                  : ""
              }
              value={profileInformation.email.value}
              onChange={onUpdateHandler}
            />
            {showErrors && <p className="errMsg">Please enter valid Email</p>}
            {isValidEmail === false && (
              <p className="errMsg invalidEmail">Please enter valid Email</p>
            )}
          </div>
          <div className="input-field">
            <label> Phone</label>
            <input
              type="text"
              name="phone"
              className={
                showErrors && profileInformation.phone.isFilled === false
                  ? "notFilled"
                  : ""
              }
              value={profileInformation.phone.value}
              onChange={onUpdateHandler}
            />
            {showErrors && <p className="errMsg">Please enter Phone Number</p>}
          </div>

          <div className="input-field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className={
                showErrors && profileInformation.password.isFilled === false
                  ? "notFilled"
                  : ""
              }
              value={profileInformation.password.value}
              onChange={onUpdateHandler}
            />
            <p
              className={isPasswordLength === false ? "errMsg short" : "errMsg"}
            >
              {/* {showErrors && "Password should be 8 characters long"} */}
              {isPasswordLength === false
                ? "Password should be 8 characters long"
                : ""}
            </p>
          </div>
          <div className="input-field">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className={
                showErrors &&
                profileInformation.confirmPassword.isFilled === false
                  ? "notFilled"
                  : ""
              }
              value={profileInformation.confirmPassword.value}
              onChange={onUpdateHandler}
            />
            <p
              className={isPasswordSame === false ? "errMsg notSame" : "errMsg"}
            >
              {showErrors &&
                isPasswordSame &&
                "Confirm password don't match with Password"}
              {isPasswordSame === false ? "password not same" : ""}
            </p>
          </div>
        </form>
      </div>
      <ButtonWrapper setStep={setStep} onSubmitHandler={onSubmitHandler} />
    </>
  );
};

export default ProfileInformation;
