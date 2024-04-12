import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook, updateBook } from "../actions/bookActions";
import Modal from "./Modal";
import "./BookList.css";

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const [selectedBook, setSelectedBook] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedBook, setEditedBook] = useState(null);

  const handleBookSelect = (book) => {
    setSelectedBook(book);
    setIsEditing(true);
    setEditedBook({ ...book });
  };

  const handleSaveChanges = () => {
    dispatch(updateBook(editedBook));
    setIsEditing(false);
    setSelectedBook(null);
    setEditedBook(null);
  };

  return (
    <div className="book-list-container">
      {" "}
      {books.map((book) => (
        <div key={book.id} className="book-card">
          {" "}
          <div className="book-name">
            <p onClick={() => handleBookSelect(book)}>{book.name}</p>
          </div>
          <p>
            ${book.price} - {book.category}
          </p>
          <p>{book.description}</p>
          <div className="button-container">
            <button onClick={() => dispatch(deleteBook(book.id))}>
              Delete
            </button>
          </div>
        </div>
      ))}
      {isEditing && (
        <Modal isOpen={isEditing} onClose={() => setIsEditing(false)}>
          <h2>Edit Book</h2>
          <input
            type="text"
            value={editedBook.name}
            onChange={(e) =>
              setEditedBook({ ...editedBook, name: e.target.value })
            }
            placeholder="Book Name"
          />
          <input
            type="text"
            value={editedBook.price}
            onChange={(e) =>
              setEditedBook({ ...editedBook, price: e.target.value })
            }
            placeholder="Price"
          />
          <input
            type="text"
            value={editedBook.category}
            onChange={(e) =>
              setEditedBook({ ...editedBook, category: e.target.value })
            }
            placeholder="Category"
          />
          <textarea
            value={editedBook.description}
            onChange={(e) =>
              setEditedBook({ ...editedBook, description: e.target.value })
            }
            placeholder="Description"
          ></textarea>
          <button onClick={handleSaveChanges}>Update</button>
        </Modal>
      )}
    </div>
  );
};

export default BookList;
