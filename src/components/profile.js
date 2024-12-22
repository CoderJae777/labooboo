import React, { useState } from "react";
import "../styles/profile.css";
import Navbar from "./navbar";
import alex from "../images/alex.png";

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    name: "John Doe",
    gender: "Male",
    age: 30,
    ethnicity: "Chinese",
    country: "Singapore",
    dietRestrictions: "Vegetarian",
    medicalConditions: "None",
    foodPreferences: "Prefers spicy food, loves noodles and soups.",
    other: "Interested in exploring plant-based diets.",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    alert("Profile updated successfully!");
  };

  return (
    <>
      <Navbar />
      <div className="profile-container">
        <form className="profile-form" onSubmit={handleSubmit}>
          <img src={alex} />

          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-binary">Non-binary</option>
              <option value="Other">Other</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              min="1"
            />
          </div>

          <div className="form-group">
            <label htmlFor="ethnicity">Ethnicity:</label>
            <input
              type="text"
              id="ethnicity"
              name="ethnicity"
              value={formData.ethnicity}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="dietRestrictions">Diet Restrictions:</label>
            <input
              type="text"
              id="dietRestrictions"
              name="dietRestrictions"
              value={formData.dietRestrictions}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="medicalConditions">Medical Conditions:</label>
            <input
              type="text"
              id="medicalConditions"
              name="medicalConditions"
              value={formData.medicalConditions}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="foodPreferences">Food Preferences:</label>
            <textarea
              id="foodPreferences"
              name="foodPreferences"
              value={formData.foodPreferences}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="other">Other Information:</label>
            <textarea
              id="other"
              name="other"
              value={formData.other}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit">Save Profile</button>
        </form>
      </div>
    </>
  );
};

export default ProfileForm;
