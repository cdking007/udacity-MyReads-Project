import React, { Component } from "react";
import * as BookAPI from "./BooksAPI";
class BookCard extends Component {
  state = {};
  handleChange = (e) => {
    BookAPI.update(this.props.book, e.target.value).then((books) => {
      this.props.handleUpdate(books);
    });
  };
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${this.props.bookcoverURL}")`,
            }}
          />
          <div className="book-shelf-changer">
            <select onChange={this.handleChange} value={this.props.bookShelf}>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.bookTitle}</div>
        <div className="book-authors">{this.props.bookAuthors}</div>
      </div>
    );
  }
}

export default BookCard;
