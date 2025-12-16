import { Book, BookSearch, Library } from './lib/index';

const lib = new Library();

const book1 = new Book('Clean Code', 'Edric Cao', 2023);

const book2 = new Book('Design Pattern', 'Edric Cao', 2022);

lib.addBook(book1);
lib.addBook(book2);

const bookSearch = new BookSearch(lib.books);
console.log(bookSearch.getBookByTitle('Clean Code'));
console.log(bookSearch.getBooksByAuthor('Edric Cao'));
console.log(bookSearch.getBooksByPublicationYear(2022));
