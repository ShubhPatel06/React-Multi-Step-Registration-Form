// FormContainer.js
import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const FormContainer = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    country: "",
    city: "",
    address: "",
    dob: "",
    gender: "",
    occupation: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  switch (step) {
    case 1:
      return (
        <Step1
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <Step2
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <Step3
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 4:
      return (
        <Step4
          formData={formData}
          handleChange={handleChange}
          prevStep={prevStep}
        />
      );
    default:
      return null;
  }
};

export default FormContainer;
