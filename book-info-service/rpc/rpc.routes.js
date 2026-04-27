const express = require("express");
const {
  getBookById,
  createBook
} = require("../services/book.service");

const router = express.Router();

router.post("/getBook", (req, res) => {
  const { id } = req.body;

  const book = getBookById(id);

  if (!book) {
    return res.status(404).json({
      message: "Book not found"
    });
  }

  res.json(book);
});

router.post("/createBook", (req, res) => {
  const result = createBook(req.body);

  if (result.error) {
    return res.status(result.status).json({
      message: result.message
    });
  }

  res.status(201).json(result.data);
});

module.exports = router;