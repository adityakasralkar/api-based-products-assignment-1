const {
  getAllBooks,
  getBookById,
  createBook
} = require("../services/book.service");

const rootValue = {
  books: () => {
    return getAllBooks();
  },

  book: ({ id }) => {
    return getBookById(id);
  },

  createBook: ({ input }) => {
    const result = createBook(input);

    if (result.error) {
      throw new Error(result.message);
    }

    return result.data;
  }
};

module.exports = rootValue;