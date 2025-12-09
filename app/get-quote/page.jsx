"use client";

import { useState } from "react";

const GOOGLE_DATA_URL =
  "https://script.google.com/macros/s/AKfycbx3eq3SqPddXb4YYO4d2B4E2HTldqagUhsJJgbmwuONKWiLVrNnQWyvz1fIwxUGvxGTPQ/exec";

// ---------------------------
// Reusable Input Component
// ---------------------------
const InputField = ({ label, name, type = "text", value, onChange, required }) => (
  <div className="flex flex-col gap-1">
    <label className="text-gray-700 font-medium text-sm">
      {label} {required && "*"}
    </label>
    <input
      name={name}
      type={type}
      required={required}
      value={value}
      onChange={onChange}
      className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
    />
  </div>
);

export default function GetQuotePage() {
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

  // Validate
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Enter your full name";
    if (!formData.email.includes("@")) newErrors.email = "Enter a valid email";
    if (!formData.isHuman) newErrors.isHuman = "Please confirm you're human";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await fetch(GOOGLE_DATA_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      alert("Form submitted successfully!");

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
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
<section className="w-full max-w-4xl mx-auto px-6 py-16 mt-10">

  {/* Header */}
  <div className="bg-blue-50 p-6 rounded-xl shadow mb-10">
    <h1 className="text-3xl font-bold text-blue-700 text-center">
      Get a Free Quote
    </h1>
    <p className="text-gray-600 text-center mt-2">
      Fill in your details to become a member of our survey community.
    </p>
  </div>

  <form
    onSubmit={handleSubmit}
    className="space-y-10 bg-white p-8 rounded-2xl shadow-xl border"
  >

    {/* PERSONAL INFO */}
    <div>
      <h2 className="text-lg font-semibold text-blue-700 mb-4 border-l-4 border-blue-700 pl-3">
        Personal Information
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <InputField label="Full Name" name="fullName" required value={formData.fullName} onChange={handleChange} />
        <InputField label="Email Address" name="email" type="email" required value={formData.email} onChange={handleChange} />

        <InputField label="Mobile Number" name="mobile" type="tel" value={formData.mobile} onChange={handleChange} />
        <InputField label="Age" name="age" type="number" value={formData.age} onChange={handleChange} />

        <InputField label="Birthday" name="birthday" type="date" value={formData.birthday} onChange={handleChange} />
        <InputField label="Country" name="country" value={formData.country} onChange={handleChange} />

        <InputField label="Region / State" name="region" value={formData.region} onChange={handleChange} />
        <InputField label="City" name="city" value={formData.city} onChange={handleChange} />

        <InputField label="Zip Code" name="zip" value={formData.zip} onChange={handleChange} />
        <InputField label="Languages Spoken" name="languages" value={formData.languages} onChange={handleChange} />
      </div>
    </div>

    {/* SELECT FIELDS */}
    <div>
      <h2 className="text-lg font-semibold text-blue-700 mb-4 border-l-4 border-blue-700 pl-3">
        Professional Details
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Gender */}
        <div>
          <label className="text-gray-700 font-medium text-sm">Gender *</label>
          <select
            name="gender"
            required
            value={formData.gender}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 mt-1 text-sm focus:ring-2 focus:ring-blue-600 hover:border-blue-500 transition"
          >
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
            <option>Prefer not to say</option>
          </select>
        </div>

        {/* Income */}
        <div>
          <label className="text-gray-700 font-medium text-sm">Monthly Income *</label>
          <select
            name="income"
            required
            value={formData.income}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 mt-1 text-sm focus:ring-2 focus:ring-blue-600 hover:border-blue-500 transition"
          >
            <option value="">Select Income</option>
            <option>Below $500</option>
            <option>$500 – $1000</option>
            <option>$1000 – $1500</option>
            <option>$1500 – $2000</option>
            <option>$2000 – $2500</option>
            <option>$2500 – $3000</option>
            <option>$3000 – $4000</option>
            <option>$4000 – $5000</option>
            <option>Above $5000</option>
          </select>
        </div>

        {/* Occupation */}
        <div>
          <label className="text-gray-700 font-medium text-sm">Occupation *</label>
          <select
            name="occupation"
            required
            value={formData.occupation}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 mt-1 text-sm focus:ring-2 focus:ring-blue-600 hover:border-blue-500 transition"
          >
            <option value="">Select Occupation</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Student</option>
            <option>Retired</option>
            <option>Businessman</option>
            <option>Self-employed</option>
            <option>Housewife</option>
            <option>Other</option>
          </select>
        </div>

        {/* Industry */}
        <div>
          <label className="text-gray-700 font-medium text-sm">Industry *</label>
          <select
            name="industry"
            required
            value={formData.industry}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 mt-1 text-sm focus:ring-2 focus:ring-blue-600 hover:border-blue-500 transition"
          >
            <option value="">Select Industry</option>
            <option>IT</option>
            <option>Healthcare</option>
            <option>Education</option>
            <option>Retail</option>
            <option>Finance</option>
            <option>Telecommunications</option>
            <option>Manufacturing</option>
            <option>Real Estate</option>
            <option>Media & Entertainment</option>
            <option>Travel & Tourism</option>
            <option>Hospitality</option>
            <option>Transportation</option>
            <option>Construction</option>
            <option>FMCG</option>
            <option>Automotive</option>
            <option>Agriculture</option>
            <option>Government</option>
            <option>Non-Profit</option>
          </select>
        </div>
      </div>
    </div>

    {/* Job Title */}
    <InputField
      label="Job Title (Optional)"
      name="jobTitle"
      value={formData.jobTitle}
      onChange={handleChange}
    />

{/* Checkbox */}
<div className="mt-4 flex items-center gap-3">
  <input
    type="checkbox"
    name="isHuman"
    checked={formData.isHuman}
    onChange={handleChange}
    className="h-5 w-5 rounded border-gray-300 text-blue-700 focus:ring-blue-700 cursor-pointer"
  />
  <label className="text-gray-800 text-sm cursor-pointer">
    I am not a robot
  </label>
</div>

{errors.isHuman && (
  <p className="text-red-500 text-xs mt-1">{errors.isHuman}</p>
)}


    {/* Submit */}
    <button
      type="submit"
      className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition shadow-md"
    >
      Submit
    </button>
  </form>
</section>

  );
}
