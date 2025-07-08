import React, { useEffect } from "react";

const Error = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://electric-eel.onrender.com");
        const data = await response.json();

        console.log("API Response:", data);
        console.log("API Structure:", Object.keys(data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 text-center">
      <h2 className="text-lg font-semibold">Fetching API...</h2>
      <p className="text-sm text-gray-500">Check your console for results.</p>
    </div>
  );
};

export default Error;
