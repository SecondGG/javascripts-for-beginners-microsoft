// var
var hello = "Hello"; // function scope
console.log(hello);

// let
if (true) {
  let world = "Hello World"; // block scoped
  console.log(world);
}

// const
const aaron = "Aaron"; // can't reassign const
console.log(aaron);
