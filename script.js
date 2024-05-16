// 1.1
let myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

const myAlphabetLength = () => {
  console.log(myAlphabet.length);
}

myAlphabetLength();

// 1.2
let planets = [ 'Earth', 'Mercury', 'Venus', 'Mars', 'Jupiter' ];

planets.forEach(planets => {
  console.log(planets);  // planet of planets
});

// 1.3
let myArr = [ 1, 2, 'One', true]; 

myArr.forEach(myArr => {
  console.log(myArr);
})