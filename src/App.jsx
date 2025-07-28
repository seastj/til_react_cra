import { TodayContextProvider } from "./contexts/todo/TodayContext";
import TodoAdd from "./contexts/todo/TodoAdd";
import TodoList from "./contexts/todo/TodoList";

function App() {
  return (
    <TodayContextProvider>
      <h1>할일 서비스 : Context 와 Reducer 활용</h1>
      <TodoAdd />
      <TodoList />
    </TodayContextProvider>
  );
}

export default App;
