import React, { useState } from "react";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return <div>Dashboard</div>;
};

export default Dashboard;
