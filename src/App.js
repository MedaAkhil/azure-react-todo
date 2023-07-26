import React from 'react';
import TodoList from './components/todoList';

function App() {
  return (
    <center>
      <div className="App">
      <header className="App-header">
        <h1>My Todo App</h1>
      </header>
      <main>
        <TodoList />
      </main>
    </div>
    </center>
  );
}

export default App;
