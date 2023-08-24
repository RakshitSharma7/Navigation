function Book(title, author) {
        this.title=title;
        this.author=author;
        this.available=true;
    }
    
    const library = [];
    
    function addBook(title, author) {
    var newbook =new Book(title,author);
    library.push(newbook);
    }
    
    function borrowBook(title) {
    var book=library.find(book=>book.title===title);
    if(book){
        if(book.isAvailable){
            book.isAvailable=false;
            console.log('Borrowed.');
        }else{
            console.log('Not available')
        }
    }
    else{
        console.log('Not Found in Library')
    }
    }
    // Function to return a book
    function returnBook(title) {
        var book=library.find(book=>book.title===title);
        if(book){
            if(!book.isAvailable){
                book.isAvailable=true;
                console.log('Returned.');
            }else{
                console.log('Not Borrowed')
            }
        }
        else{
            console.log('Not Found in Library')
        }
    }
    // Function to list all books
    function listBooks() {
        console.log("Library Books:");
        library.forEach(book => {
          const status = book.isAvailable ? "Available" : "Not Available";
          console.log(`${book.title} by ${book.author} - ${status}`);
        });
    }
    // Example usage
    addBook("The Hobbit", "J.R.R. Tolkien");
    addBook("Harry Potter and the Sorcerer's Stone", "J.K. Rowling");
    borrowBook("The Hobbit");
    listBooks();
    returnBook("The Hobbit");
    listBooks();
    