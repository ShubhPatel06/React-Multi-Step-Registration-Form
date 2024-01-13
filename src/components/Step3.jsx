import ProgressIndicator from "./ProgressIndicator";

const Step3 = ({ formData, handleChange, prevStep, nextStep }) => {
  const handleNext = () => {
    nextStep();
  };

  const handlePrev = () => {
    prevStep();
  };
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
            type="text"
            required
            value={formData.dob}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          />
        </div>
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
            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          />
        </div>
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
            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          />
        </div>
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
