import { CatalogUpdater } from "./RequestSender.mjs";
import { Book } from "./RequestSender.mjs";

let sender = new CatalogUpdater();

await sender.getAllBooks()
  .then(response => {
    console.log("before")
    console.log(response.data);
  })

await sender.addBook(new Book("2398", "Pride", "Jocko")) 
  .catch(err => console.log(err))

await sender.getAllBooks()
  .then(response => {
    console.log("after")
    console.log(response.data);
  })