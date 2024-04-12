import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./store";
import BookList from "./components/BookList";
import AddBookForm from "./components/AddBookForm";
import "./App.css";
function App() {
  const [isAdding, setIsAdding] = useState(false);

  return (
    <Provider store={store}>
      <div className="App">
        <h1>Bookstore</h1>
        <div className="add-button">
          <button onClick={() => setIsAdding(true)}>Add a Book</button>
        </div>
        {isAdding && (
          <AddBookForm isOpen={isAdding} onClose={() => setIsAdding(false)} />
        )}
        <BookList />
      </div>
    </Provider>
  );
}

export default App;
