import axios from "axios";

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

  constructor() {
    this.set = '';
  }

  async #makePostReqest(book) {

  }

  async #makeGetRequest(book) {

  }

  //
  async addBook(newBook) {
    if(!(newBook instanceof Book)) throw NotABook();

  }

  async removeBook(book) {
    if(!(book instanceof Book)) throw NotABook();



  }


}

export {Book, CatalogUpdater, NotABook};