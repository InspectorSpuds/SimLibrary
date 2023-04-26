import './BookList.css'

function BookList(props) {
  const added_books = props.addedBooks;
  let bookList = added_books.map((book) =>
    <li>{book.title} by {book.author}</li>
  ); 

  return (
    <div className="BookList">
      <ul>{bookList}</ul>
    </div>
  )
}

export default BookList;