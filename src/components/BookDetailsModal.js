import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateBook } from "../actions/bookActions";
import Modal from "./Modal";
import "./BookDetailsModal.css";

const BookDetailsModal = ({ book, isOpen, onClose }) => {
  const [editBook, setEditBook] = useState(book);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setEditBook({ ...editBook, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateBook(editBook));
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="modal-container">
        <div className="modal-header">
          <h2 className="modal-title">Edit Book</h2>
          <span className="modal-close" onClick={onClose}>
            ×
          </span>
        </div>
        <form onSubmit={handleUpdate} className="edit-book-form">
          <div>
            <input
              type="text"
              name="name"
              value={editBook.name}
              onChange={handleChange}
              placeholder="Book Name"
            />
            <input
              type="text"
              name="price"
              value={editBook.price}
              onChange={handleChange}
              placeholder="Price"
            />
            <input
              type="text"
              name="category"
              value={editBook.category}
              onChange={handleChange}
              placeholder="Category"
            />
            <textarea
              name="description"
              value={editBook.description}
              onChange={handleChange}
              placeholder="Description"
            ></textarea>
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
export default BookDetailsModal;
