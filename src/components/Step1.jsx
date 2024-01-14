import { useState } from "react";
import ProgressIndicator from "./ProgressIndicator";

const Step1 = ({ formData, handleChange, nextStep, validation }) => {
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPhoneNo, setErrorPhoneNo] = useState("");

  const handleNext = () => {
    if (!validation.name) {
      setErrorName("Full name must be at least 8 characters");
    }

    if (!validation.email) {
      setErrorEmail("Email is invalid");
    }

    if (!validation.phoneNo) {
      setErrorPhoneNo("Phone number must be 10 digits");
    }

    if (validation.name && validation.email && validation.phoneNo) {
      nextStep();
    }
  };

  return (
    <>
      <div>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Full Name
          </label>
        </div>
        <div className="mt-2">
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className={`w-full rounded-md border-2 py-1.5 pl-2 text-gray-900 sm:text-sm sm:leading-6 focus:bg-none ${
              validation.name
                ? "border-green-500"
                : errorName
                ? "border-red-500"
                : ""
            }`}
          />
        </div>
        <p className={`error mt-1 ${validation.name ? "hidden" : ""}`}>
          {errorName}
        </p>
      </div>
      <div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
        </div>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={`w-full rounded-md border-2 py-1.5 pl-2 text-gray-900 sm:text-sm sm:leading-6 focus:bg-none ${
              validation.email
                ? "border-green-500"
                : errorEmail
                ? "border-red-500"
                : ""
            }`}
          />
        </div>
        <p className={`error mt-1 ${validation.email ? "hidden" : ""}`}>
          {errorEmail}
        </p>
      </div>
      <div>
        <div>
          <label
            htmlFor="phoneNo"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Phone Number
          </label>
        </div>
        <div className="mt-2">
          <input
            id="phoneNo"
            name="phoneNo"
            type="tel"
            required
            value={formData.phoneNo}
            onChange={handleChange}
            className={`w-full rounded-md border-2 py-1.5 pl-2 text-gray-900 sm:text-sm sm:leading-6 focus:bg-none ${
              validation.phoneNo
                ? "border-green-500"
                : errorPhoneNo
                ? "border-red-500"
                : ""
            }`}
          />
        </div>
        <p className={`error mt-1 ${validation.phoneNo ? "hidden" : ""}`}>
          {errorPhoneNo}
        </p>
      </div>
      <div className="flex justify-end">
        <a
          href="#"
          onClick={handleNext}
          className="text-blue-600 text-sm font-semibold leading-6 underline hover:text-blue-500"
        >
          Next
        </a>
      </div>
      <ProgressIndicator width={"0%"} />
    </>
  );
};

export default Step1;
