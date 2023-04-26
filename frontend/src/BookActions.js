import './BookActions.css'
import {Book} from './RequestSender';
import { useState } from 'react';

function BookActions(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [ISBN, setISBN] = useState("");
  const [delISBN, setDelISBN] = useState("")

  const addBook = (e) => {
    e.preventDefault();
    props.addBook(title, author);
  }

  const delBook = (e) => {
    e.preventDefault();
    props.delBook(delISBN);
  }

  const updateTitle = (val) => {
    const statee = val.target.value;
    setTitle(statee);
  }

  const updateAuthor = (val) => {
    const statee = val.target.value;
    setAuthor(statee);
  }

  const updateISBN = (val) => {
    const statee = val.target.value;
    setISBN(statee);
  }

  const updateDelISBN = (val) => {
    const statee = val.target.value;
    setDelISBN(statee);
  }

  return (
    <div className="BookActions">
      <form className="Form" onSubmit={addBook}>
        <div className="FormTitle">
          <h2>Add book</h2>
        </div>
        <div class="FormRow">
          <label>Title: </label>
          <input type="text" value={title} onChange={val => updateTitle(val)} />
        </div> 
        <div class="FormRow">
          <label>Author: </label>
          <input type="text" value={author} onchange={val => updateAuthor(val)} />
        </div>
        <div class="FormRow">
          <label>ISBN: </label>
          <input type="text" value={ISBN} onchange={val => updateISBN(val)} />
        </div>

        <input type="submit" value="Submit" />
      </form>

      <form className="Form">
        <div className="FormTitle" onSubmit={delBook}>
          <h2>Delete book</h2>
        </div>
        <div class="FormRow">
          <label>ISBN: </label>
          <input type="text" value={delISBN} onchange={val => updateDelISBN(val)} />
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default BookActions;