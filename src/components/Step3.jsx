import { useState } from "react";
import ProgressIndicator from "./ProgressIndicator";

const Step3 = ({ formData, handleChange, prevStep, nextStep, validation }) => {
  const [errorDoB, setErrorDoB] = useState("");
  const [errorGender, setErrorGender] = useState("");
  const [errorOccupation, setErrorOccupation] = useState("");

  const handleNext = () => {
    if (!validation.dob) {
      setErrorDoB("Date of Birth is required");
    }

    if (!validation.gender) {
      setErrorGender("Gender is required");
    }

    if (!validation.occupation) {
      setErrorOccupation("Occupation is required");
    }

    if (validation.dob && validation.gender && validation.occupation) {
      nextStep();
    }
  };

  const handlePrev = () => {
    prevStep();
  };

  const currentDate = new Date().toISOString().split("T")[0];
  return (
    <>
      <div>
        <div>
          <label
            htmlFor="dob"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Date of Birth
          </label>
        </div>
        <div className="mt-2">
          <input
            id="dob"
            name="dob"
            type="date"
            required
            value={formData.dob}
            onChange={handleChange}
            max={currentDate} // Set the max attribute to the current date
            className={`w-full rounded-md border-2 py-1.5 pl-2 text-gray-900 sm:text-sm sm:leading-6 focus:bg-none ${
              validation.dob
                ? "border-green-500"
                : errorDoB
                ? "border-red-500"
                : ""
            }`}
          />
        </div>
        <p className={`error mt-1 ${validation.dob ? "hidden" : ""}`}>
          {errorDoB}
        </p>
      </div>
      <div>
        <div>
          <label
            htmlFor="gender"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Gender
          </label>
        </div>
        <div className="mt-2">
          <input
            id="gender"
            name="gender"
            type="text"
            required
            value={formData.gender}
            onChange={handleChange}
            className={`w-full rounded-md border-2 py-1.5 pl-2 text-gray-900 sm:text-sm sm:leading-6 focus:bg-none ${
              validation.gender
                ? "border-green-500"
                : errorGender
                ? "border-red-500"
                : ""
            }`}
          />
        </div>
        <p className={`error mt-1 ${validation.gender ? "hidden" : ""}`}>
          {errorGender}
        </p>
      </div>
      <div>
        <div>
          <label
            htmlFor="occupation"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Occupation
          </label>
        </div>
        <div className="mt-2">
          <input
            id="occupation"
            name="occupation"
            type="text"
            required
            value={formData.occupation}
            onChange={handleChange}
            className={`w-full rounded-md border-2 py-1.5 pl-2 text-gray-900 sm:text-sm sm:leading-6 focus:bg-none ${
              validation.occupation
                ? "border-green-500"
                : errorOccupation
                ? "border-red-500"
                : ""
            }`}
          />
        </div>
        <p className={`error mt-1 ${validation.occupation ? "hidden" : ""}`}>
          {errorOccupation}
        </p>
      </div>
      <div className="flex justify-between">
        <a
          href="#"
          onClick={handlePrev}
          className="text-blue-600 text-sm font-semibold leading-6 underline hover:text-blue-500"
        >
          Prev
        </a>
        <a
          href="#"
          onClick={handleNext}
          className="text-blue-600 text-sm font-semibold leading-6 underline hover:text-blue-500"
        >
          Next
        </a>
      </div>
      <ProgressIndicator width={"66.66%"} />
    </>
  );
};

export default Step3;
