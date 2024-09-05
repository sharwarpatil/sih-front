import React from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
  BsFillBarChartFill,
  BsFillCartCheckFill,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

function Display() {
  // Sample data for charts
  const data = [
    { name: "Week 1", sales: 400, revenue: 2400 },
    { name: "Week 2", sales: 300, revenue: 1398 },
    { name: "Week 3", sales: 200, revenue: 9800 },
    { name: "Week 4", sales: 278, revenue: 3908 },
  ];

  // Sample data for statistics
  const totalSales = 1178; // Replace with actual sales data
  const totalRevenue = 17506; // Replace with actual revenue data

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        {/* Existing cards */}
        <div className="card">
          <div className="card-inner">
            <h3>PRODUCTS</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>300</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>CATEGORIES</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>12</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>CUSTOMERS</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>33</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>ALERTS</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>42</h1>
        </div>

        {/* New cards for sales data */}
        <div className="card">
          <div className="card-inner">
            <h3>SALES THIS MONTH</h3>
            <BsFillCartCheckFill className="card_icon" />
          </div>
          <h1>{totalSales}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>TOTAL REVENUE</h3>
            <BsFillBarChartFill className="card_icon" />
          </div>
          <h1>${totalRevenue}</h1>
        </div>
      </div>

      <div className="charts">
        {/* Bar chart for sales data */}
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#8884d8" />
            <Bar dataKey="revenue" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        {/* Line chart for sales data */}
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" />
            <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Display;
