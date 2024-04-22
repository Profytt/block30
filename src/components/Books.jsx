import React, { useState, useEffect } from "react";
import BookDetailsPopup from "../utils/BookDetails";

function FetchBooks() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const APIURL =
      "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books";

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(APIURL);
        if (!response.ok) {
          throw new Error("Something went wrong fetching books!");
        }
        const data = await response.json();
        console.log(data)
        setBooks(data.books);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDetailsClick = (book) => {
    setSelectedBook(book); 
    document.getElementById('my_modal_3').showModal(); // Trigger the modal
  };

  // Global error display (if needed)
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="bg-secondColor">
      {isLoading && <p>Loading...</p>}

      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto">
        {books.map((book) => (
          <div className="flex mx-auto card card-side bg-fourthColor shadow-xl" key={book.id}>
            <figure>
              <img src={book.coverimage} alt={book.title} />{" "}
              {/* Assuming coverImage exists */}
            </figure>
            <div className="card-body text-textColor">
              <h2 className="card-title">{book.title}</h2>
              <p>by {book.author}</p>
              <div className="card-actions justify-end">
                <button
                  className="btn"
                  onClick={() => handleDetailsClick(book)}
                >
                  Details
                </button>
                <button
                  className="btn"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          {/* Customize display for book details */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_3').close()}>✕</button>
          <h3 className="font-bold text-lg">{selectedBook?.title}</h3> {/* Use the selectedBook */}
          <p className="py-4">By {selectedBook?.author}</p> 
          <p>{selectedBook?.description}</p>
        </div>
      </dialog>

    </div>
  );
}

export default FetchBooks;
