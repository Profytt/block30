import React from "react";
    
function BookDetailsPopup({ book, onClose }) {

    console.log(book)
  return (
    <div className="modal" style={{ display: 'block', visibility: 'visible', zIndex: 9999 }}> 
      <div className="card w-96 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">{book.title}</h2> 
          <p>By {book.author}</p> 
          <p>Description: {book.description}</p> {/* Display the description */}
          <div className="card-actions justify-end">
            <button className="btn" onClick={onClose}>Close1</button> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetailsPopup; 

