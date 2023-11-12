import React, { useState, useCallback } from "react";

import Tasks from "./Task";

const App = () => {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTask = useCallback(() => {
    setTasks((t) => [...t, "New Task Added"]);
  }, [tasks]);

  return (
    <div>
      <div className="first">
        <Tasks tasks={tasks} addTask={addTask} />
      </div>
      <div className="second">
        Count: {count}
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
};

export default App;
