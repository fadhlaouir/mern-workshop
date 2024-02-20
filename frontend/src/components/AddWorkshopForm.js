import React, { useState } from "react";
import axios from "axios";

const AddWorkshopForm = ({ onAdd }) => {
  const [workshopData, setWorkshopData] = useState({
    name: "",
    description: "",
    date: "",
  });
  const [error, setError] = useState("");
  const API_URL = process.env.REACT_APP_API_URL;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setWorkshopData({
      ...workshopData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!workshopData.name || !workshopData.description || !workshopData.date) {
      setError("All fields are required.");
      return;
    }
    try {
      await axios.post(`${API_URL}/workshop`, workshopData);
      onAdd(); // Trigger parent component to fetch data again
      setWorkshopData({
        name: "",
        description: "",
        date: "",
      });
      setError("");
    } catch (error) {
      setError("Error adding workshop. Please try again later.");
      console.error("Error adding workshop:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>Add Workshop</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={workshopData.name}
          onChange={handleChange}
          className="form-input"
        />
        <br />
        <input
          type="text"
          name="description"
          placeholder="Enter description"
          value={workshopData.description}
          onChange={handleChange}
          className="form-input"
        />
        <br />
        <input
          type="date"
          name="date"
          value={workshopData.date}
          onChange={handleChange}
          className="form-input"
        />
        <br />
        <button type="submit" className="form-button">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddWorkshopForm;
