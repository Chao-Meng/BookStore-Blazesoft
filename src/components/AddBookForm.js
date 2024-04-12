import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../actions/bookActions";
import Modal from "./Modal";
import "./AddBookForm.css";
const AddBookForm = ({ isOpen, onClose }) => {
  const [book, setBook] = useState({ name: "", price: "", description: "" });
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addBook({ ...book, id: Date.now() }));
    onClose();
    setBook({ name: "", price: "", category: "", description: "" });
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit} className="add-book-form">
        <h2>Add a Book</h2>
        <input
          type="text"
          value={book.name}
          onChange={(e) => setBook({ ...book, name: e.target.value })}
          placeholder="Input the book name"
        />
        <input
          type="text"
          value={book.price}
          onChange={(e) => setBook({ ...book, price: e.target.value })}
          placeholder="Input the price"
        />
        <textarea
          value={book.description}
          onChange={(e) => setBook({ ...book, description: e.target.value })}
          placeholder="Input the description"
        ></textarea>
        <div className="add-button">
          <button type="submit">Add Book</button>
        </div>
      </form>
    </Modal>
  );
};

export default AddBookForm;
