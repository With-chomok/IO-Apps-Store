import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const RatingsChart = ({ rate }) => {
  const ratingData = rate.map((item) => ({
    name: item.name,
    count: item.count,
  }));

  return (
    <div className="w-full h-64 bg-white p-4 rounded-xl">
      <h3 className="text-[#001931] text-2xl font-semibold mb-4">Ratings</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart layout="vertical" data={ratingData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" fill="#627382" />
          <YAxis dataKey="name" type="category" fill="#627382" />
          <Tooltip />
          <Bar dataKey="count" fill="#FF8811" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingsChart;
