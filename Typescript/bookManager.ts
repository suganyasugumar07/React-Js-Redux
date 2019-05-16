import Book from './books';
import { authorList } from './books';

let bookObj = new Book(101, 'ReactBook', 'reactauthor', 1);
console.log(bookObj);
console.log(bookObj.myFn());
console.log(authorList);

function spreadArray(a:Book, b:Book, c:Book, d:Book, e:Book) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
}

function spreadLiteral(bookArg: Book,authorList: String[]): void {
    const { bookNumber, bookName, author } = bookArg;
    console.log(bookNumber);
    console.log(bookName);
    console.log(author);
    const [bestAuthor,betterAuthor,...others] = authorList;
    console.log(bestAuthor);
    console.log(betterAuthor);
    console.log(others);
}

spreadLiteral(bookObj, authorList);
spreadArray(...authorList);


