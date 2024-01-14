import { useState } from "react";
import ProgressIndicator from "./ProgressIndicator";

const Step2 = ({ formData, handleChange, prevStep, nextStep, validation }) => {
  const [errorCountry, setErrorCountry] = useState("");
  const [errorCity, setErrorCity] = useState("");
  const [errorAddress, setErrorAddress] = useState("");

  const handleNext = () => {
    if (!validation.country) {
      setErrorCountry("Country is required");
    }

    if (!validation.city) {
      setErrorCity("City is required");
    }

    if (!validation.address) {
      setErrorAddress("Street Address is required");
    }

    if (validation.country && validation.city && validation.address) {
      nextStep();
    }
  };

  const handlePrev = () => {
    prevStep();
  };
  return (
    <>
      <div>
        <div>
          <label
            htmlFor="country"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Country
          </label>
        </div>
        <div className="mt-2">
          <input
            id="country"
            name="country"
            type="text"
            required
            value={formData.country}
            onChange={handleChange}
            className={`w-full rounded-md border-2 py-1.5 pl-2 text-gray-900 sm:text-sm sm:leading-6 focus:bg-none ${
              validation.country
                ? "border-green-500"
                : errorCountry
                ? "border-red-500"
                : ""
            }`}
          />
        </div>
        <p className={`error mt-1 ${validation.country ? "hidden" : ""}`}>
          {errorCountry}
        </p>
      </div>
      <div>
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            City
          </label>
        </div>
        <div className="mt-2">
          <input
            id="city"
            name="city"
            type="text"
            required
            value={formData.city}
            onChange={handleChange}
            className={`w-full rounded-md border-2 py-1.5 pl-2 text-gray-900 sm:text-sm sm:leading-6 focus:bg-none ${
              validation.city
                ? "border-green-500"
                : errorCity
                ? "border-red-500"
                : ""
            }`}
          />
        </div>
        <p className={`error mt-1 ${validation.city ? "hidden" : ""}`}>
          {errorCity}
        </p>
      </div>
      <div>
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Street Adress
          </label>
        </div>
        <div className="mt-2">
          <input
            id="address"
            name="address"
            type="text"
            required
            value={formData.address}
            onChange={handleChange}
            className={`w-full rounded-md border-2 py-1.5 pl-2 text-gray-900 sm:text-sm sm:leading-6 focus:bg-none ${
              validation.address
                ? "border-green-500"
                : errorAddress
                ? "border-red-500"
                : ""
            }`}
          />
        </div>
        <p className={`error mt-1 ${validation.address ? "hidden" : ""}`}>
          {errorAddress}
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
      <ProgressIndicator width={"33.33%"} />
    </>
  );
};

export default Step2;
