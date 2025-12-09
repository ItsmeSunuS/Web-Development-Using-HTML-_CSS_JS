// Firebase Configuration (Make sure to replace this with your Firebase project credentials)

// Initialize Firebase
const BASE_URL = "https://book-management-web-app-9e708-default-rtdb.asia-southeast1.firebasedatabase.app/book-management-web-app.json";

// Fetch and display books from Firebase Realtime Database
function fetchBooks() {
    fetch("https://book-management-web-app-9e708-default-rtdb.asia-southeast1.firebasedatabase.app/book-management-web-app.json", {
        method: "GET"
    })
    .then((res) => res.json())
    .then((data) => {
        const books = data ? Object.keys(data).map(key => ({
            id: key,
            ...data[key]
        })) : [];
        
        renderBooks(books); // Display books on UI
    })
    .catch((error) => console.error("Error fetching books: ", error));
}

// Render books to the page
function renderBooks(books) {
    const bookCardsContainer = document.getElementById('bookCards');
    bookCardsContainer.innerHTML = '';  // Clear previous cards

    books.forEach(book => {
        const bookCard = createBookCard(book.id, book);
        bookCardsContainer.appendChild(bookCard);
    });
}

// Create individual book card
function createBookCard(bookId, book) {
    const card = document.createElement('div');
    card.classList.add('book-card');
    
    card.innerHTML = `
        <img src="${book.coverImageURL}" alt="${book.title}" class="book-cover" />
        <h3>${book.title}</h3>
        <p>by ${book.author}</p>
        <p>Price: $${book.price}</p>
        <div class="card-actions">
            <button class="btnUpdate" onclick="updateData('${bookId}', prompt('Enter new author name:'))">Update Author</button>
            <button class="btnDelete" onclick="deleteData('${bookId}')">Delete</button>
            <button class="btnDetails" onclick="viewDetails('${bookId}')">View Details</button>
        </div>
    `;
    
    return card;
}

// Add a new book to Firebase
function createData(title, author, price, coverImageURL) {
    fetch("https://book-management-web-app-9e708-default-rtdb.asia-southeast1.firebasedatabase.app/book-management-web-app.json", {
        method: "POST",
        body: JSON.stringify({
            title: title,
            author: author,
            price: price,
            coverImageURL: coverImageURL
        })
    })
    .then((res) => res.json())
    .then((data) => {
        console.log("Book added successfully", data);
        fetchBooks(); // Re-render the books after adding a new one
    });
}

// Update book data (e.g., update author)
function updateData(bookId, newAuthor) {
    fetch(`https://book-management-web-app-9e708-default-rtdb.asia-southeast1.firebasedatabase.app/books/${bookId}.json.`, {
        method: "PUT",
        body: JSON.stringify({
            author: newAuthor
        })
    })
    .then((res) => res.json())
    .then((data) => {
        console.log("Updated the book", data);
        fetchBooks(); // Re-render the books after update
    });
}

// Delete a book from Firebase
function deleteData(bookId) {
    fetch(`https://YOUR_PROJECT_ID.firebaseio.com/bhttps://book-management-web-app-9e708-default-rtdb.asia-southeast1.firebasedatabase.app/books/${bookId}.json.ooks/${bookId}.json`, {
        method: "DELETE"
    })
    .then((res) => res.json())
    .then((data) => {
        console.log("Deleted the book", data);
        fetchBooks(); // Re-render the books after deletion
    });
}

// View Book Details (You can modify this to show more detailed info in a modal)
function viewDetails(bookId) {
    fetch(`https://book-management-web-app-9e708-default-rtdb.asia-southeast1.firebasedatabase.app/books/${bookId}.json.`, {
        method: "GET"
    })
    .then((res) => res.json())
    .then((data) => {
        alert(`Title: ${data.title}\nAuthor: ${data.author}\nPrice: $${data.price}`);
    })
    .catch((error) => console.error("Error fetching book details: ", error));
}

// Handle the form submission to add a new book
document.getElementById('bookForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const price = document.getElementById('price').value;
    const coverImageURL = document.getElementById('coverImageURL').value;

    createData(title, author, price, coverImageURL); // Add the book
});

// Load the books when the page is loaded
fetchBooks();
