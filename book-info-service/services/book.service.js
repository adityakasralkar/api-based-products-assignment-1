const books = require("../data/books.json");

function getAllBooks() {
  return books;
}

function getBookById(id) {
  return books.find((book) => book.id === Number(id));
}

function createBook(bookData) {
  const { title, author, genre, publishedYear } = bookData;

  if (!title || !author) {
    return {
      error: true,
      status: 400,
      message: "Title and author are required"
    };
  }

  const newBook = {
    id: books.length + 1,
    title,
    author,
    genre: genre || "General",
    publishedYear: publishedYear || new Date().getFullYear()
  };

  books.push(newBook);

  return {
    error: false,
    data: newBook
  };
}

module.exports = {
  getAllBooks,
  getBookById,
  createBook
};