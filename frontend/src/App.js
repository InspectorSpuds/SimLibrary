import './App.css';
import Title from './Title'
import BookList  from './BookList';
import BookActions from './BookActions'
import Footer from './Footer'
import { useState } from 'react';
import {Book} from './RequestSender'


function App() {
  const [addedBooks, setBooks] = useState([]);

  const addBook = (title, author, ISBN) => {
    //onhly add if object not in book list
    if(addedBooks.filter(obj => (obj.ISBN === ISBN)).length > 0) {
      alert("Book already in list");
      return;
    }

    setBooks(old => [...old, new Book(title, author, ISBN)]);
  }

  const removeBook = (ISBN) => {
    setBooks(addedBooks.filter(book => book.ISBN !== ISBN));
  }

  return (
    <div className="Main">
      <Title />
      <BookList addedBooks={addedBooks}/>
      <BookActions addBook={addBook} removeBook={removeBook}/>
      <Footer/>
    </div>
  );
}

export default App;
