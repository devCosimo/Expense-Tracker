import React from 'react';

export const TotalExpenses = ({ total }) => (
  <div className="mt-6 bg-blue-100 p-4 rounded-md shadow">
    <h2 className="text-2xl font-bold text-blue-800">
      Total Expenses: ${total.toFixed(2)}
    </h2>
  </div>
);
