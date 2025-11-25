class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = false;
    }

    issueBook() {
        this.isIssued = true;
    }

    returnBook() {
        this.isIssued = false;
    }
}

const library = [
    new Book("A", "Author1", "111"),
    new Book("B", "Author2", "222"),
    new Book("C", "Author3", "333")
];

const available = library.filter(b => !b.isIssued);
console.log(available);

function issueByISBN(isbn) {
    const book = library.find(b => b.isbn === isbn);
    if (book) book.issueBook();
}
