import { useState } from "react";
import ProgressIndicator from "./ProgressIndicator";

const Step1 = ({ formData, handleChange, nextStep }) => {
  const [errorName, setErrorName] = useState("");
  const [nameColor, setNameColor] = useState("");

  const handleNext = () => {
    if (formData.name.length > 8) {
      setErrorName("");
      setNameColor("green");
    } else {
      setErrorName("Full name is required");
      setNameColor("red");
    }

    if (formData.name !== "") {
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
            className="block w-full rounded-md border-2 py-1.5 pl-2 text-gray-900 sm:text-sm sm:leading-6"
            style={{ borderColor: nameColor }}
          />
        </div>
        <p className="error mt-1">{errorName}</p>
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
            className="block w-full rounded-md border-2 py-1.5 pl-2 text-gray-900 sm:text-sm sm:leading-6"
          />
        </div>
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
            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          />
        </div>
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
