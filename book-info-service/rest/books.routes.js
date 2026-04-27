const express = require("express");
const {
  getAllBooks,
  getBookById,
  createBook
} = require("../services/book.service");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(getAllBooks());
});

router.get("/:id", (req, res) => {
  const book = getBookById(req.params.id);

  if (!book) {
    return res.status(404).json({
      message: "Book not found"
    });
  }

  res.json(book);
});

router.post("/", (req, res) => {
  const result = createBook(req.body);

  if (result.error) {
    return res.status(result.status).json({
      message: result.message
    });
  }

  res.status(201).json(result.data);
});

module.exports = router;