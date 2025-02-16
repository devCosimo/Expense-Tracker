
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];
export const calculateTotalExpenses = (expenses) => {
    return expenses.reduce((sum, expense) => sum + expense.amount, 0);
  };
  
  export const getCategoryData = (expenses) => {
    const uniqueCategories = [...new Set(expenses.map(expense => expense.category))].sort();
    const categoryColorMap = Object.fromEntries(
      uniqueCategories.map((category, index) => [category,COLORS [index % COLORS.length]])
    );
  
    const categoryData = expenses.reduce((acc, expense) => {
      acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
      return acc;
    }, {});
  
    return { uniqueCategories, categoryColorMap, categoryData };
  };