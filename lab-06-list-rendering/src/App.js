import logo from './logo.svg';
import './App.css';
import TodoList from "./TodoList"

function App() {

  // to understand list rendering, two importance concepts
  // 1. JSX elements are just Javascript objects
  // 2. We can render ARRAYS of JSX elements

  return (
    <div className="App">
      <h1>My To Do's:</h1> 
      <TodoList />
    </div>
  );
}

export default App;
