import './BookList.css'

function BookList(props) {
  const added_books = props.addedBooks;
  


  let bookList = added_books.map((book) =>
    <div style={{margin: "40px"}}>{book.title} by {book.author} (ISBN: {book.ISBN})</div> 
  ); 

  return (
    <div className="BookList">
      <div id="List">
        <div>{bookList}</div>
      </div>      
    </div>
  )
}

export default BookList;