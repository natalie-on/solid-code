import { Book, BookSearch, Library } from './lib/index';

let lib: Library;
lib = new Library();

let book1: Book;
book1 = new Book('Clean Code', 'Edric Cao', 2023);

let book2: Book;
book2 = new Book('Design Pattern', 'Edric Cao', 2022);

lib.addBook(book1);
lib.addBook(book2);

let bookSearch: BookSearch;
bookSearch = new BookSearch(lib.books);
console.log(bookSearch.getBookByTitle('Clean Code'));
console.log(bookSearch.getBooksByAuthor('Edric Cao'));
console.log(bookSearch.getBooksByPublicationYear(2022));
