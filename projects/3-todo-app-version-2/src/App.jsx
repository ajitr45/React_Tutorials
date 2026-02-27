import AppName from "./components/AddName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App () {

const todoItems =[
  {

    name :"Buy Milk",
    dueDate : '26/02/2026'

  },
  {

    name :"Go To College",
    dueDate : '26/02/2026'

  },

];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>

      

    </center>
  );
}

export default App;
