import { createSelector } from "reselect";

const booksSelector = (state) => state.books.books; // Adjust according to your state structure

export const getBooks = createSelector(
  [booksSelector],
  (books) => books || [] // Ensure it always returns an array, even if books is undefined
);
