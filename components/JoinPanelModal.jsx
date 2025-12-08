"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

const GOGLE_DATA_URL =
  "https://script.google.com/macros/s/AKfycbx3eq3SqPddXb4YYO4d2B4E2HTldqagUhsJJgbmwuONKWiLVrNnQWyvz1fIwxUGvxGTPQ/exec";

const JoinPanelModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    birthday: "",
    email: "",
    mobile: "",
    gender: "",
    country: "",
    region: "",
    city: "",
    zip: "",
    income: "",
    occupation: "",
    jobTitle: "",
    industry: "",
    languages: "",
    isHuman: false,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  // VALIDATION
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Enter your full name";
    if (!formData.email.includes("@")) newErrors.email = "Enter a valid email";
    if (!formData.isHuman) newErrors.isHuman = "Please confirm you're human";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // SUBMIT HANDLER
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await fetch(GOGLE_DATA_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      alert("Form submitted successfully!");
      onClose();

      setFormData({
        fullName: "",
        age: "",
        birthday: "",
        email: "",
        mobile: "",
        gender: "",
        country: "",
        region: "",
        city: "",
        zip: "",
        income: "",
        occupation: "",
        jobTitle: "",
        industry: "",
        languages: "",
        isHuman: false,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn px-3"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto p-6 relative animate-slideUp"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
        >
          <X size={26} />
        </button>

        <h2 className="text-2xl font-bold text-blue-700">Join Our Panel</h2>
        <p className="text-gray-500 text-sm mb-4">Fill in your details to join.</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* TEXT INPUT LOOP */}
          {[
            ["fullName", "Full Name", "text"],
            ["email", "Email Address", "email"],
            ["mobile", "Mobile Number", "tel"],
            ["age", "Age", "number"],
            ["country", "Country", "text"],
            ["city", "City", "text"],
            ["languages", "Languages", "text"],
          ].map(([name, label, type]) => (
            <div key={name}>
              <label className="block font-medium mb-1 text-gray-700">
                {label}*
              </label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                required
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 text-sm"
              />
              {errors[name] && (
                <p className="text-red-500 text-xs mt-1">{errors[name]}</p>
              )}
            </div>
          ))}

          {/* GENDER */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">Gender*</label>
            <select
              name="gender"
              required
              value={formData.gender}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 text-sm"
            >
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
              <option>Prefer not to say</option>
            </select>
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="isHuman"
              checked={formData.isHuman}
              onChange={handleChange}
              className="h-4 w-4"
            />
            <span className="text-sm text-gray-700">I'm not a robot</span>
          </div>
          {errors.isHuman && (
            <p className="text-red-500 text-xs mt-1">{errors.isHuman}</p>
          )}

          {/* SUBMIT */}
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white w-full py-3 rounded-lg font-semibold transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinPanelModal;
