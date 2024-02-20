import React, { useState, useEffect } from "react";
import axios from "axios";

const WorkshopList = () => {
  const [workshops, setWorkshops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/workshops`);
      setWorkshops(response.data?.data?.workshops || []);
      setLoading(false);
    } catch (error) {
      setError("Error fetching workshops. Please try again later.");
      setLoading(false);
      console.error("Error fetching workshops:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/workshops/${id}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting workshop:", error);
    }
  };

  return (
    <div>
      <h1>Workshop Lists</h1>
      {loading ? (
        <p>Loading workshops...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {workshops.map((workshop) => (
              <tr key={workshop._id}>
                <td>{workshop.name}</td>
                <td>{workshop.description}</td>
                <td>{new Date(workshop.date).toDateString()}</td>
                <td>
                  <button onClick={() => handleDelete(workshop._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default WorkshopList;
