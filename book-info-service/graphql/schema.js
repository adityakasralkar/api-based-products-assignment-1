const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Book {
    id: ID!
    title: String!
    author: String!
    genre: String
    publishedYear: Int
  }

  input BookInput {
    title: String!
    author: String!
    genre: String
    publishedYear: Int
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
  }

  type Mutation {
    createBook(input: BookInput!): Book
  }
`);

module.exports = schema;