
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BookList() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({ title: "", author: "", email: "", age: "" });

  useEffect(() => {
    fetch("/books.json")
      .then(res => res.json())
      .then(setBooks);
  }, []);

  const addBook = () => {
    if (!form.title || !form.author) return alert("Validation failed");
    setBooks([...books, { ...form, id: Date.now() }]);
  };

  return (
    <div className="container">
      <h2>Book Inventory</h2>
      <input placeholder="Title" onChange={e=>setForm({...form,title:e.target.value})} />
      <input placeholder="Author" onChange={e=>setForm({...form,author:e.target.value})} />
      <input placeholder="Email" type="email" onChange={e=>setForm({...form,email:e.target.value})} />
      <input placeholder="Age" type="number" onChange={e=>setForm({...form,age:e.target.value})} />
      <button onClick={addBook}>Add</button>

      <table>
        <thead><tr><th>Title</th><th>Author</th></tr></thead>
        <tbody>
          {books.map(b=>(
            <tr key={b.id}>
              <td><Link to={"/book/"+b.id}>{b.title}</Link></td>
              <td>{b.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
