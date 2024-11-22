import React, { useState } from 'react';

const MultiForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const steps = ['Personal Info', 'Account Details', 'Confirmation'];

  const handleNext = () => {
    if (currentStep < steps.length) setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      {/* Stepper Header */}
      <div className="relative flex justify-between items-center mb-6">
        {/* Garis Horizontal */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 -z-10"></div>

        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex-1 text-center text-sm font-medium"
          >
            <div
              className={`w-8 h-8 mx-auto flex items-center justify-center rounded-full ${
                currentStep === index + 1
                  ? 'bg-blue-500 text-white'
                  : currentStep > index + 1
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-300'
              }`}
            >
              {index + 1}
            </div>
            <span
              className={`block mt-2 ${
                currentStep === index + 1
                  ? 'text-blue-500'
                  : currentStep > index + 1
                  ? 'text-green-500'
                  : 'text-gray-500'
              }`}
            >
              {step}
            </span>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="Enter your name"
            />
          </div>
        )}
        {currentStep === 2 && (
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="Enter your email"
            />
            <label className="block mt-4 mb-2 text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="Enter your password"
            />
          </div>
        )}
        {currentStep === 3 && (
          <div className="mb-4">
            <h3 className="text-lg font-medium">Confirm Your Details</h3>
            <p className="mt-2">Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={handleBack}
              className="px-4 py-2 bg-gray-300 rounded-md"
            >
              Back
            </button>
          )}
          {currentStep < steps.length ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Next
            </button>
          ) : (
            <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-md">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiForm;
