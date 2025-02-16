import React, { useState } from 'react';
import { CustomAlert } from './components/alert/CustomAlert';
import { ExpensePieChart } from './components/charts/ExpensePieChart';
import { ExpenseBarChart } from './components/charts/ExpenseBarChart';
import { ExpenseForm } from './components/expenseform/ExpenseForm';
import { ExpenseList } from './components/expenselist/ExpenseList';
import { TotalExpenses } from './components/totalexpenses/TotalExpenses';
import { calculateTotalExpenses, getCategoryData } from './utils/expenseUtils';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ description: '', amount: '', category: '' });
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense(prev => ({ ...prev, [name]: value }));
  };

  const addExpense = () => {
    if (newExpense.description && newExpense.amount && newExpense.category) {
      setExpenses(prev => [...prev, { ...newExpense, amount: parseFloat(newExpense.amount) }]);
      setNewExpense({ description: '', amount: '', category: '' });
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  const removeExpense = (index) => {
    setExpenses(prev => prev.filter((_, i) => i !== index));
  };

  const totalExpenses = calculateTotalExpenses(expenses);
  const { categoryData, categoryColorMap } = getCategoryData(expenses);

  const pieChartData = Object.entries(categoryData).map(([name, value]) => ({
    name,
    value,
    fill: categoryColorMap[name]
  }));

  const barChartData = Object.entries(categoryData).map(([category, amount]) => ({
    category,
    amount,
    fill: categoryColorMap[category]
  }));

  return (
    <div className="max-w-4xl mx-auto p-6 bg-blue-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600 ">Expense Tracker</h1>
      
      {showAlert && (
        <CustomAlert
          message="Your expense has been added successfully."
          onClose={() => setShowAlert(false)}
        />
      )}
      
      <ExpenseForm
        newExpense={newExpense}
        onInputChange={handleInputChange}
        onAddExpense={addExpense}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <ExpensePieChart data={pieChartData} />
        <ExpenseBarChart data={barChartData} />
      </div>
      
      <ExpenseList
        expenses={expenses}
        onRemoveExpense={removeExpense}
      />
      
      <TotalExpenses total={totalExpenses} />
    </div>
  );
};

export default App;