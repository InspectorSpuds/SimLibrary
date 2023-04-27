class DBInitError extends Error {
  constructor(message) {
    super(message);
  }
}

//class: DBHandler
class DBHandler {
  #host
  #user
  #password
  #mysql
  #dbConnection
  #dbInitiailized


  constructor(host, user,  password) {
    this.#mysql = require("mysql")
    this.#host = host
    this.#user = user
    this.#password = password
    this.#dbInitiailized = false
  }

  initDB() {
    this.#dbConnection = this.#mysql.createConnection({
      host: this.#host,
      user: this.#user,
      password: this.#password
    })

    this.#dbConnection.connect((err) => {
      if (err) throw DBInitError("Error connecting to DB");
    })

    this.#dbInitiailized = true;
  }

  closeDB() {
    if(!this.#dbInitiailized) throw new DBInitError("DB not initialized");

    this.#dbConnection.end((err) => {
      if(err) throw DBInitError("Error closing db connection");
    })
  }

  async getBooks() {
    //create a promise to create the query
    return new Promise((resolve, reject) => {
      this.#dbConnection.query("SELECT * FROM SimLibrary.Book", (err, result, fields) => {
        if(err) reject(new DBInitError("Error in Query: books does not exist"));
        resolve(result);
      })
    })
  }

  async insertBook(ISBN, title, author) {
    return new Promise((resolve, reject) => {
      this.#dbConnection.query(`INSERT INTO SimLibrary.Book values(${ISBN},${title},${author})`, (err, result, fields) => {
        if(err) reject(new DBInitError(err.message));
        resolve("success");
      })
    })
  }

  async deleteBook(ISBN) {
    return new Promise((resolve, reject) => {
      this.#dbConnection.query(`DELETE FROM SimLibrary.Book WHERE ISBN = ${ISBN}`, (err, result, fields) => {
        if(err) reject(new DBInitError(error.message))
        resolve(result)
      })
    })
  }

  dbIsInitialized() {
    return this.#dbInitiailized
  }

}

exports.DBHandler   = DBHandler;
exports.DBInitError = DBInitError;