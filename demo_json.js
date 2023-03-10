const book = new Object({ title: "1984", author: "George Orwell" })
console.log(typeof book);
console.log(book);

console.log("----------------------")

const myBooks = [
    new Object({ title: "1984", author: "George Orwell" }),
    new Object({ title: "Becoming", author: "Michelle Obama" })
];
console.log(typeof myBooks)
console.log(myBooks);


console.log(JSON.stringify(myBooks));