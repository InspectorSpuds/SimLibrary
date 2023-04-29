import './BookActions.css'
import { useState } from 'react';

function BookActions(props) {
  const [title, setTitle]     = useState("");
  const [author, setAuthor]   = useState("");
  const [ISBN, setISBN]       = useState("");
  const [delISBN, setDelISBN] = useState("");

  const addBook = (e) => {
    e.preventDefault();

    //trim the details
    setTitle(title => title.trim());
    setAuthor(author => author.trim());
    setISBN(ISBN => ISBN.trim());

    if(title !== "" && author !== "" && ISBN !== "") 
      props.addBook(title, author, ISBN);
    else 
      alert("Error: 1 or more add book fields empty")
  }

  const delBook = (e) => {
    e.preventDefault();

    setDelISBN(delISBN => delISBN.trim());

    if(delISBN !== "" || delISBN !== undefined) 
      props.delBook(delISBN);
    else 
      alert("Error: empty ISBN field, cannot delete empty ISBN")
  }

  const updateTitle = (val) => {
    let statee = val.target.value;
    setTitle(statee);
  }

  const updateAuthor = (val) => {
    let statee = val.target.value;
    setAuthor(statee);
  }

  const updateISBN = (val) => {
    let statee = val.target.value;
    setISBN(statee);
  }

  const updateDelISBN = (val) => {
    let statee = val.target.value;
    setDelISBN(statee);
  }

  return (
    <div className="BookActions">
      <form className="Form" onSubmit={addBook}>
        <div className="FormTitle">
          <h2>Add book</h2>
        </div>
        <div className="FormRow">
          <label>Title: </label>
          <input type="text" value={title} onChange={val => updateTitle(val)} />
        </div> 
        <div className="FormRow">
          <label>Author: </label>
          <input type="text" value={author} onChange={val => updateAuthor(val)} />
        </div>
        <div className="FormRow">
          <label>ISBN: </label>
          <input type="text" value={ISBN} onChange={val => updateISBN(val)} />
        </div>

        <input type="submit" value="Submit" />
      </form>

      <form className="Form">
        <div className="FormTitle" onSubmit={delBook}>
          <h2>Delete book</h2>
        </div>
        <div class="FormRow">
          <label>ISBN: </label>
          <input type="text" value={delISBN} onChange={val => updateDelISBN(val)} />
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default BookActions;