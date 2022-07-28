import { Counter } from "./features/counter/Counter";
import { Todo } from "./features/todo/Todo";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <Todo />
    </div>
  );
}
