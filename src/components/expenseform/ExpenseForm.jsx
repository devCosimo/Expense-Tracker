import React from 'react';
import { PlusCircle } from 'lucide-react';

export const ExpenseForm = ({ newExpense, onInputChange, onAddExpense }) => (
  <div className="mb-6 bg-white p-4 rounded-md shadow">
    <h2 className="text-xl font-semibold mb-4">Add New Expense</h2>
    <div className="flex flex-wrap -mx-2">
      <input
        type="text"
        name="description"
        value={newExpense.description}
        onChange={onInputChange}
        placeholder="Description"
        className="flex-grow m-2 p-2 border rounded"
      />
      <input
        type="number"
        name="amount"
        value={newExpense.amount}
        onChange={onInputChange}
        placeholder="Amount"
        className="w-1/4 m-2 p-2 border rounded"
      />
      <select
        name="category"
        value={newExpense.category}
        onChange={onInputChange}
        className="w-1/4 m-2 p-2 border rounded"
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Utilities">Utilities</option>
        <option value="Other">Other</option>
      </select>
      <button
        onClick={onAddExpense}
        className="w-full sm:w-auto m-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 flex items-center justify-center"
      >
        <PlusCircle className="mr-2" size={20} />
        Add Expense
      </button>
    </div>
  </div>
);