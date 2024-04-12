const initialState = {
  books: [
    {
      id: 1,
      name: "The Secret Garden",
      price: "20",
      category: "Fiction",
      description:
        "The Secret Garden - A timeless classic about the power of friendship and the magic of nature.",
    },
    {
      id: 2,
      name: "Pride and Prejudice",
      price: "15",
      category: "Mystery/Thriller",
      description:
        "Pride and Prejudice - Jane Austen's beloved novel about love, marriage, and societal expectations.",
    },
    {
      id: 3,
      name: "To Kill a Mockingbird",
      price: "15",
      category: "Romance",
      description:
        "To Kill a Mockingbird - Harper Lee's masterpiece exploring themes of racial injustice and morality in the American South.",
    },
    {
      id: 4,
      name: "1984",
      price: "15",
      category: "Science Fiction",
      description:
        "1984 - George Orwell's dystopian vision of a totalitarian future where individuality is suppressed.",
    },
    {
      id: 5,
      name: "The Great Gatsby",
      price: "15",
      category: "Fantasy",
      description:
        "The Great Gatsby - F. Scott Fitzgerald's tale of wealth, ambition, and the American Dream during the Jazz Age.",
    },
    {
      id: 6,
      name: "Harry Potter and the Sorcerer's Stone",
      price: "15",
      category: "Biography/Memoir",
      description:
        "Harry Potter and the Sorcerer's Stone - The first book in J.K. Rowling's iconic series following the adventures of a young wizard.",
    },
  ],
};

function booksReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_BOOK":
      return { ...state, books: [...state.books, action.payload] };
    case "DELETE_BOOK":
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    case "UPDATE_BOOK":
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.id ? action.payload : book
        ),
      };
    default:
      return state;
  }
}

export default booksReducer;
