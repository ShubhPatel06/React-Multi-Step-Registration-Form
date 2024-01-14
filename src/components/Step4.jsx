import { useState } from "react";

const Step4 = ({ formData, handleChange, prevStep, validation }) => {
  const [errorUsername, setErrorUsername] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validation.username) {
      setErrorUsername("Username of  is required");
    }

    if (!validation.password) {
      setErrorPassword("Password is required");
    }

    if (!validation.confirmPassword) {
      setErrorConfirmPassword("Password do no match");
    }

    if (
      validation.username &&
      validation.password &&
      validation.confirmPassword
    ) {
      console.log(formData);
    }
  };

  const handlePrev = () => {
    prevStep();
  };
  return (
    <>
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Username
        </label>
        <div className="mt-2">
          <input
            id="username"
            name="username"
            type="text"
            required
            value={formData.username}
            onChange={handleChange}
            className={`w-full rounded-md border-2 py-1.5 pl-2 text-gray-900 sm:text-sm sm:leading-6 focus:bg-none ${
              validation.username
                ? "border-green-500"
                : errorUsername
                ? "border-red-500"
                : ""
            }`}
          />
        </div>
        <p className={`error mt-1 ${validation.username ? "hidden" : ""}`}>
          {errorUsername}
        </p>
      </div>
      <div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Password
          </label>
        </div>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            required
            value={formData.password}
            onChange={handleChange}
            className={`w-full rounded-md border-2 py-1.5 pl-2 text-gray-900 sm:text-sm sm:leading-6 focus:bg-none ${
              validation.password
                ? "border-green-500"
                : errorPassword
                ? "border-red-500"
                : ""
            }`}
          />
        </div>
        <p className={`error mt-1 ${validation.password ? "hidden" : ""}`}>
          {errorPassword}
        </p>
      </div>
      <div>
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Confirm Password
          </label>
        </div>
        <div className="mt-2">
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`w-full rounded-md border-2 py-1.5 pl-2 text-gray-900 sm:text-sm sm:leading-6 focus:bg-none ${
              validation.confirmPassword
                ? "border-green-500"
                : errorConfirmPassword
                ? "border-red-500"
                : ""
            }`}
          />
        </div>
        <p
          className={`error mt-1 ${validation.confirmPassword ? "hidden" : ""}`}
        >
          {errorConfirmPassword}
        </p>
      </div>
      <div>
        <a
          href="#"
          onClick={handlePrev}
          className="text-blue-600 text-sm font-semibold leading-6 underline hover:text-blue-500"
        >
          Prev
        </a>
      </div>
      <button
        type="submit"
        className="flex w-full justify-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
        onClick={handleSubmit}
      >
        Register
      </button>
    </>
  );
};

export default Step4;
