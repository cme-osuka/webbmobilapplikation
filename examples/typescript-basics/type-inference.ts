

let points = 10; // number
let date = new Date(); // Typescript: Date

const firstName = "Ryan"; // primitivt värde, literal type
const age = 30; // same
const tomorrow = new Date(); // icke-primitivt värde


const dog = "Stevie"; // type: "Stevie"
let pet = dog; // type: string


let food; // type: any
food = "nuggets";




function multiply(a: number, b: number) {
  return a * b;
}

const hundred = multiply(10, 10);



function trumpLoan(wallet = 1) {
	return wallet + 1000000;
}

const myWallet = trumpLoan(0);


// quick fix för duplicate
export {}