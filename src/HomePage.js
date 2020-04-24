import React, { Component } from "react";
import BookCard from "./BookCard";
import { Link } from "react-router-dom";

class HomePage extends Component {
  state = {};
  renderCurrentlyReadingBooks = () => {
    if (this.props.books.length === 0) {
      return <h1>No Books in this shelf</h1>;
    }
    return this.props.books
      .filter((book) => book.shelf === "currentlyReading")
      .map((book) => {
        return (
          <li key={book.id}>
            <BookCard
              bookTitle={book.title}
              bookAuthors={book.authors.toString()}
              bookcoverURL={book.imageLinks.thumbnail}
              handleUpdate={this.props.handleUpdate}
              bookShelf={book.shelf}
              book={book}
            />
          </li>
        );
      });
  };

  renderWantToReadBook = () => {
    if (this.props.books.length === 0) {
      return <h1>No Books in this shelf</h1>;
    }
    return this.props.books
      .filter((book) => book.shelf === "wantToRead")
      .map((book) => {
        return (
          <li key={book.id}>
            <BookCard
              bookTitle={book.title}
              bookAuthors={book.authors.toString()}
              bookcoverURL={book.imageLinks.thumbnail}
              handleUpdate={this.props.handleUpdate}
              bookShelf={book.shelf}
              book={book}
            />
          </li>
        );
      });
  };

  renderReadBook = () => {
    if (this.props.books.length === 0) {
      return <h1>No Books in this shelf</h1>;
    }
    return this.props.books
      .filter((book) => book.shelf === "read")
      .map((book) => {
        return (
          <li key={book.id}>
            <BookCard
              bookTitle={book.title}
              bookAuthors={book.authors.toString()}
              bookcoverURL={book.imageLinks.thumbnail}
              bookShelf={book.shelf}
              book={book}
              handleUpdate={this.props.handleUpdate}
            />
          </li>
        );
      });
  };
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.renderCurrentlyReadingBooks()}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">{this.renderWantToReadBook()}</ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">{this.renderReadBook()}</ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
