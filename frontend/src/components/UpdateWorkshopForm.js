import React, { useState } from "react";
import axios from "axios";

const UpdateWorkshopForm = ({ workshop, onCancel, onUpdate }) => {
  const [updatedWorkshopData, setUpdatedWorkshopData] = useState({
    name: workshop.name,
    description: workshop.description,
    date: new Date(workshop.date).toISOString().split("T")[0], // Convert date to string in yyyy-mm-dd format
  });
  const [error, setError] = useState("");
  const API_URL = process.env.REACT_APP_API_URL;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedWorkshopData({
      ...updatedWorkshopData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      !updatedWorkshopData.name ||
      !updatedWorkshopData.description ||
      !updatedWorkshopData.date
    ) {
      setError("All fields are required.");
      return;
    }
    try {
      await axios.put(
        `${API_URL}/workshops/${workshop._id}`,
        updatedWorkshopData
      );
      onUpdate(); // Trigger parent component to fetch data again
      onCancel(); // Close the update form
      setError("");
    } catch (error) {
      setError("Error updating workshop. Please try again later.");
      console.error("Error updating workshop:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>Update Workshop</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={updatedWorkshopData.name}
          onChange={handleChange}
          className="form-input"
        />
        <br />
        <input
          type="text"
          name="description"
          placeholder="Enter description"
          value={updatedWorkshopData.description}
          onChange={handleChange}
          className="form-input"
        />
        <br />
        <input
          type="date"
          name="date"
          value={updatedWorkshopData.date}
          onChange={handleChange}
          className="form-input"
        />
        <br />
        <button type="submit" className="form-button">
          Update
        </button>
        <button type="button" onClick={onCancel} className="form-button">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UpdateWorkshopForm;
