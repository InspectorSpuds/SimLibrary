import './App.css';
import Title from './Title'
import BookList  from './BookList';
import BookActions from './BookActions';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import {Book, CatalogUpdater } from './RequestSender';


function App() {

  
  //Book definition -----
  const [addedBooks, setBooks] = useState([]);

  const  addBook =  (title, author, ISBN) => {
    //try adding it to the db first, on failure reject and alert, else 
    const sender = new CatalogUpdater();
    sender.addBook(new Book(title, author, ISBN))
      .then(response => {
        alert("Book successfully added");
        setBooks(old => [...old, new Book(title, author, ISBN)]);
      })
      .catch(error => alert(error.message));
  }

  const removeBook = (ISBN) => {
    setBooks(addedBooks.filter(book => book.ISBN !== ISBN));
  }
  //-----

  //async GET request to update books with defaults first
  useEffect(() => {
    //fetch books with api caller and then add to list
    const sender = new CatalogUpdater();
    sender.getAllBooks()
      .then(response => {
        setBooks([]);
        for(let objIndex = 0; objIndex < response.data.length; objIndex++) {
          let currObj = response.data[objIndex];
          
          console.log(`title: ${currObj.author}, ISBN: ${currObj.ISBN}, title: ${currObj.ISBN}`)
          setBooks(old => [...old, new Book(currObj.title, currObj.author, currObj.ISBN)]);
        }
          
      })
      .catch(error => alert(error.message));
  }, []);



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
