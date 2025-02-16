import React from 'react';
import { Trash2 } from 'lucide-react';

export const ExpenseList = ({ expenses, onRemoveExpense }) => (
  <div className="bg-white p-4 rounded-md shadow">
    <h2 className="text-xl font-semibold mb-4">Expense List</h2>
    <ul className="divide-y divide-gray-200">
      {expenses.map((expense, index) => (
        <li key={index} className="py-3 flex justify-between items-center">
          <div>
            <p className="font-medium">{expense.description}</p>
            <p className="text-sm text-gray-500">{expense.category}</p>
          </div>
          <div className="flex items-center">
            <span className="font-bold mr-4">${expense.amount.toFixed(2)}</span>
            <button
              onClick={() => onRemoveExpense(index)}
              className="text-red-500 hover:text-red-700 transition duration-300"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);