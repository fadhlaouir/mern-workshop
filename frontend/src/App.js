import React, { useState, useEffect } from "react";
import axios from "axios";
import AddWorkshopForm from "../src/components/AddWorkshopForm";
import WorkshopList from "../src/components/WorkShopList";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      await axios.get(`${process.env.REACT_APP_API_URL}/workshops`);
      setLoading(false);
    } catch (error) {
      setError("Error fetching workshops. Please try again later.");
      setLoading(false);
      console.error("Error fetching workshops:", error);
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Workshop Manager</h1>
      <AddWorkshopForm onAdd={fetchData} />
      {loading ? (
        <p>Loading workshops...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <WorkshopList />
      )}
    </div>
  );
};

export default App;
