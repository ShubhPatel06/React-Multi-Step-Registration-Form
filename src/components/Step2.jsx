import ProgressIndicator from "./ProgressIndicator";

const Step2 = ({ formData, handleChange, prevStep, nextStep }) => {
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
            className="block w-full rounded-md border-2 py-1.5 pl-2 text-gray-900 sm:text-sm sm:leading-6"
          />
        </div>
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
            className="block w-full rounded-md border-2 py-1.5 pl-2 text-gray-900 sm:text-sm sm:leading-6"
          />
        </div>
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
            className="block w-full rounded-md border-2 py-1.5 pl-2 text-gray-900 sm:text-sm sm:leading-6"
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
      <ProgressIndicator width={"33.33%"} />
    </>
  );
};

export default Step2;
