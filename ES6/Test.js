class Test{
    constructor(id, name, amount) {
        this.id = id;
        this.name = name;
        this.amount = amount;
    }
    myMethod() {
        return `${this.id},${this.name},${this.amount},discount=${this.amount *0.10}`
    } 
}
var test = new Test(1, 'Suganya', '1000');
console.log(test.myMethod());


module.exports = Test;