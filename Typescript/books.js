"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    constructor(bookNumber, author, bookName, quantity) {
        this.bookNumber = bookNumber;
        this.author = author;
        this.bookName = bookName;
        this.quantity = quantity;
    }
    myFn() {
        return `${this.bookNumber}`;
    }
}
exports.default = Book;
let bookObj = new Book(101, 'ReactBook', 'reactauthor', 1);
console.log(bookObj.myFn());
exports.authorList = ['Author1', 'Author2', 'Author3'];
