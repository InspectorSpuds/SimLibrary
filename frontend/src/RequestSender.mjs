import axios from 'axios';


//Preconditions: assumes title, author, and ISBN are strings, : )
class Book {
  constructor(title, author, ISBN) {
    this.title = title
    this.author = author
    this.ISBN = ISBN 
  }
}

class NotABook extends Error {
  constructor(message="") {
    super(message)
    this.name = this.constructor.name
  }
}

class CatalogUpdater {
  #url;

  constructor() {
    //read info from backendindo.json file
    this.#url = 'http://localhost:4000';
  }

  async addBook(newBook) {
    console.log(newBook)
    const URL_ROUTE = "/insertBook";
    if(!(newBook instanceof Book)) throw NotABook("Not a valid book to add");

    return axios.post(`${this.#url}${URL_ROUTE}`, {
      
      ISBN: newBook.ISBN,
      title: newBook.title,
      author: newBook.author
    })
  }

  async removeBook(ISBN) {
    const URL_ROUTE = '/deleteBook';

    return new axios.delete(`${this.#url}/${URL_ROUTE}`, {
      ISBN: ISBN
    })
  }

  //Preconditions:
  async getAllBooks() {
    const URL_ROUTE = '/getBooks';

    return new axios({
      method: 'get',
      url: `${this.#url}${URL_ROUTE}`,
      params: {}
    })

  }


}

export {Book, CatalogUpdater, NotABook};