// Create an object
const book = {
	title: "Story telling with Data",
    checkIn: function(){ this.isAvailable=true; }
}
console.log(book)

console.log("-------------------")

// Create an object from data
const data = {title: "Decoding Greatness"}
const book1 = new Object(data);
console.log(book1)

console.log("-------------------")

// Access properties and methods
// with Dot Notation
console.log(book.title)
console.log(book.checkIn)
console.log( book.checkIn() )

console.log("-------------------")

// with Brackets Notation
console.log(book["title"])
console.log(book["checkIn"])
console.log( book["checkIn"]() )