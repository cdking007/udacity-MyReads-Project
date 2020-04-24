import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Link, Route } from "react-router-dom";
import HomePage from "./HomePage";
import SearchBook from "./SearchBook";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) =>
      this.setState(() => {
        return {
          books: books,
        };
      })
    );
  }
  handleUpdate = (book, shelf) => {
    BooksAPI.getAll().then((books) =>
      this.setState(() => {
        return {
          books: books,
        };
      })
    );
  };

  render() {
    return (
      <div className="app">
        <Route
          path="/"
          exact
          render={() => {
            return (
              <HomePage
                books={this.state.books}
                handleUpdate={this.handleUpdate}
              />
            );
          }}
        />
        <Route
          path="/search"
          render={() => {
            return <SearchBook handleUpdate={this.handleUpdate} />;
          }}
        />
      </div>
    );
  }
}

export default BooksApp;
