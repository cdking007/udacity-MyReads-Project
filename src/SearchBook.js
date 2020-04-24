import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BookCard from "./BookCard";
class SearchBook extends Component {
  state = {
    query: "",
    result: [],
  };
  handleUpdate = (values) => {
    this.props.handleUpdate();
  };
  updateQuery = (query) => {
    this.setState({
      query: query,
    });
  };

  updateResult = async () => {
    const books = await BooksAPI.search(this.state.query);
    if (books === undefined || books.error || this.state.query === "") {
      return this.setState({ result: [] });
    }
    return this.setState({ result: books });
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(e) => {
                this.updateQuery(e.target.value);
                this.updateResult();
              }}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.result !== undefined &&
              this.state.result.map((book) => {
                return (
                  <li key={book.id}>
                    <BookCard
                      bookTitle={book.title}
                      bookAuthors={book.authors}
                      bookShelf={book.shelf}
                      handleUpdate={this.handleUpdate}
                      book={book}
                      bookcoverURL={(() => {
                        if (book.imageLinks) {
                          return book.imageLinks.thumbnail;
                        }
                        return null;
                      })()}
                    />
                  </li>
                );
              })}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBook;
