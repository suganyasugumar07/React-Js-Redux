"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const books_1 = __importDefault(require("./books"));
const books_2 = require("./books");
let bookObj = new books_1.default(101, 'ReactBook', 'reactauthor', 1);
console.log(bookObj);
console.log(bookObj.myFn());
console.log(books_2.authorList);
function spreadArray(a, b, c, d, e) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
}
function spreadLiteral(bookArg, authorList) {
    const { bookNumber, bookName, author } = bookArg;
    console.log(bookNumber);
    console.log(bookName);
    console.log(author);
    const [bestAuthor, betterAuthor, ...others] = authorList;
    console.log(bestAuthor);
    console.log(betterAuthor);
    console.log(others);
}
spreadLiteral(bookObj, books_2.authorList);
spreadArray(...books_2.authorList);
