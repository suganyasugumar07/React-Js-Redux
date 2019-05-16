export default class Book {
    public bookNumber: number;
    public author: String;
    public bookName: String;
    public quantity: number;

    constructor( bookNumber: number,author: String,bookName: String,quantity: number) {
        this.bookNumber = bookNumber;
        this.author = author;
        this.bookName = bookName;
        this.quantity = quantity;
    }
    myFn(): string{
        return `${this.bookNumber}`
    }
}

let bookObj = new Book(101, 'ReactBook', 'reactauthor', 1);
console.log(bookObj.myFn());

export const authorList = ['Author1', 'Author2', 'Author3'];
