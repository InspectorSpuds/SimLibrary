//@Filename: index.js
//@author: Ishan Parikh
//@Purpoes: routes and handling for expressjs backend
const express = require("express");
const {DBHandler} = require('./dbhandler.js')




const app = express()
const PORT = 4000

//create db connection object and try to connect first and see if that works
const dbHelper = new DBHandler("127.0.0.1", "ishan", "Ishiraishan#12")

//routes--------
app.get('/getBooks', async (req, res) => {
  try{
    //wait for sql query to resolve and return
    const dbResult = await dbHelper.getBooks()
    res.json(dbResult)
  } catch(error) { //catch any sort of errors
    res.status(404)
    res.json({message: error.message})
  }

})

app.delete('/deleteBook', async (req, res) => {
  try {
    const dbResult = await dbHelper.deleteBook(req.params['ISBN'])
    res.json({message: "succeeded in deleting book"})
  } catch(error) {
    res.status(404)
    res.json({message: error.message})
  }
})

app.post('/insertBook', async (req, res) => {
  try {
    const dbResult = await dbHelper.insertBook(req.params['ISBN'],req.params['title'],req.params['author'])
  } catch(error) {
    res.status(404)
    res.json({message: error.message})
  }
})


app.listen(PORT, () => {
  //try to init db, on fail exit program
  try {
    dbHelper.initDB();
  } catch (DBInitError) {
    console.log("Error in db creation, exiting program");
    process.exit();
  }

  console.log(`SimLibrary REST backend: http://localhost:${PORT}`)
})

