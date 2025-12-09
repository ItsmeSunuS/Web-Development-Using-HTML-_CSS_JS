// Base URL for Firebase Realtime Database
const BASE_URL = "https://book-management-web-app-9e708-default-rtdb.asia-southeast1.firebasedatabase.app/book-management-web-app";

// DOM Elements
const booksContainer = document.getElementById('books-container');
const addBookForm = document.getElementById('add-book-form');

// Modal and Close button
const modal = document.getElementById('book-detail-modal');
const closeModalButton = document.getElementById('close-modal-btn');

// Fetch and display books
function fetchBooks() {
    fetch(`${BASE_URL}.json`) // Fetch books from the root of your Firebase database
        .then(response => response.json())
        .then(data => {
            // Convert Firebase object to array
            const books = data ? Object.keys(data).map(id => ({ id, ...data[id] })) : [];
            displayBooks(books);
        })
        .catch(error => console.error("Error fetching books:", error));
}

// Display books in card format
function displayBooks(books) {
    booksContainer.innerHTML = '';  // Clear the container before rendering new data
    books.forEach(book => {
        const card = `
            <div class="book-card">
                <img src="${book.coverImageURL}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>Author: ${book.author}</p>
                <p>Price: $${book.price}</p>
                <button onclick="updateAuthor('${book.id}')">Update Author</button>
                <button onclick="deleteBook('${book.id}')">Delete</button>
                <button onclick="viewDetails('${book.id}')">View Details</button>
            </div>
        `;
        booksContainer.innerHTML += card;
    });
}

// Add a new book to Firebase
addBookForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const price = parseFloat(document.getElementById('price').value);
    const coverImageURL = document.getElementById('coverImageURL').value;
    
    const newBook = { title, author, price, coverImageURL };

    // POST request to add the new book to Firebase
    fetch(`${BASE_URL}.json`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newBook)
    })
    .then(() => fetchBooks()) // Re-fetch after adding
    .catch(error => console.error("Error adding book:", error));

    // Clear the form
    addBookForm.reset();
});

// Update book's author
function updateAuthor(bookId) {
    const newAuthor = prompt("Enter the new author name:");
    if (newAuthor) {
        const updatedBook = { author: newAuthor };

        // PATCH request to update the author of the book
        fetch(`${BASE_URL}/${bookId}.json`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedBook)
        })
        .then(() => fetchBooks()) // Re-fetch after update
        .catch(error => console.error("Error updating author:", error));
    }
}

// Delete book
function deleteBook(bookId) {
    // DELETE request to remove the book from Firebase
    fetch(`${BASE_URL}/${bookId}.json`, {
        method: "DELETE"
    })
    .then(() => fetchBooks()) // Re-fetch after deletion
    .catch(error => console.error("Error deleting book:", error));
}

// View book details in modal
function viewDetails(bookId) {
    fetch(`${BASE_URL}/${bookId}.json`)  // Fetch the specific book by its ID
        .then(response => response.json())
        .then(book => {
            // Update modal content with book details
            document.getElementById('modal-title').textContent = book.title;
            document.getElementById('modal-author').textContent = book.author;
            document.getElementById('modal-price').textContent = book.price;
            document.getElementById('modal-image').src = book.coverImageURL;

            // Show the modal
            modal.style.display = "block";
        })
        .catch(error => console.error("Error fetching book details:", error));
}

// Close modal when user clicks the "X"
closeModalButton.addEventListener('click', () => {
    modal.style.display = "none";
});

// Close modal when user clicks anywhere outside the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Initial fetch when page loads
fetchBooks();
