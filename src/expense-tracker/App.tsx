import {useState} from "react";
import ExpenseList from "../expense-tracker/component/ExpenseList";
import ExpenseFilter from "../expense-tracker/component/ExpenseFilter";
import ExpenseForm from "../expense-tracker/component/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    {id: 1, description: "aaa", amount: 10, category: "Utilities"},
    {id: 2, description: "bbb", amount: 20, category: "Utilities"},
    {id: 3, description: "ccc", amount: 30, category: "Utilities"},
    {id: 4, description: "ddd", amount: 40, category: "Utilities"},
    {id: 5, description: "eee", amount: 50, category: "Entertainment"},
  ]);
  const visibleCategory = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, {...expense, id: expenses.length + 1}])
          }
        ></ExpenseForm>
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        ></ExpenseFilter>
      </div>
      <ExpenseList
        expenses={visibleCategory}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      ></ExpenseList>
    </div>
  );
}

export default App;
