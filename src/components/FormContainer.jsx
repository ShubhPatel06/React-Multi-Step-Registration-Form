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

  const [validation, setValidation] = useState({
    name: false,
    email: false,
    phoneNo: false,
    country: false,
    city: false,
    address: false,
    dob: false,
    gender: false,
    occupation: false,
    username: false,
    password: false,
    confirmPassword: false,
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

    switch (name) {
      case "name":
        setValidation({
          ...validation,
          [name]: value.length > 8 && value !== "",
        });
        break;
      case "email":
        setValidation({
          ...validation,
          [name]: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        });
        break;
      case "phoneNo":
        setValidation({
          ...validation,
          [name]:
            /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i.test(
              value
            ),
        });
        break;
      case "country":
        setValidation({ ...validation, [name]: value.trim() !== "" });
        break;
      case "city":
        setValidation({ ...validation, [name]: value.trim() !== "" });
        break;
      case "address":
        setValidation({ ...validation, [name]: value.trim() !== "" });
        break;
      case "dob":
        setValidation({ ...validation, [name]: value.trim() !== "" });
        break;
      case "gender":
        setValidation({ ...validation, [name]: value.trim() !== "" });
        break;
      case "occupation":
        setValidation({ ...validation, [name]: value.trim() !== "" });
        break;
      case "username":
        setValidation({ ...validation, [name]: value.trim() !== "" });
        break;
      case "password":
        setValidation({ ...validation, [name]: value.length >= 6 });
        break;
      case "confirmPassword":
        setValidation({ ...validation, [name]: value === formData.password });
        break;
      default:
        break;
    }
  };

  switch (step) {
    case 1:
      return (
        <Step1
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          validation={validation}
        />
      );
    case 2:
      return (
        <Step2
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
          validation={validation}
        />
      );
    case 3:
      return (
        <Step3
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
          validation={validation}
        />
      );
    case 4:
      return (
        <Step4
          formData={formData}
          handleChange={handleChange}
          prevStep={prevStep}
          validation={validation}
        />
      );
    default:
      return null;
  }
};

export default FormContainer;
