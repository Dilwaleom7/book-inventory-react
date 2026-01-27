
import React from "react";
import { useParams } from "react-router-dom";

export default function BookDetails() {
  const { id } = useParams();
  return (
    <div>
      <h2>Book Details</h2>
      <p>ID: {id}</p>
      <p>Details fetched dynamically</p>
    </div>
  );
}
