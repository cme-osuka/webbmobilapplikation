
// Date-typen
const now = new Date();
now.getDate(); 
now.addDays(1) // ger oss fel, addDays finns inte


function scheduleReminder(startDate: Date): Date {
  const result = new Date(startDate);
  result.setDate(result.getDate() + 7);
  return result;
}

// Any-typen

let myVariable;

myVariable = "string";
myVariable = 12;
myVariable = [];

// När vill vi använda Any?

const formData: { [field: string]: any } = {
	nickname: "Soggy bob",
  owner: "Stevie",
  favoriteToy: true,
  atHunddagis: true
}

// Type: Void

function smokeSignals(message: string): void {
  console.log("***** **** ***** **")
}

let voidVariable: void;
voidVariable = "Ett värde"; // Void kan inte hålla data
voidVariable = undefined; // Utan kan bara vara undefined


// Type: Array

let randomThings: Array<any> = ["cat", 33]
randomThings.push(true)
randomThings.push({ message: "Ship ahoy!" })

const numbers: Array<number> = [1, "meow", 3];
numbers.push(true);

const strings: string[] = ["one", "two", "three"]

const inferredArray = [1, 2, 3];


function countPoints(name: string, ...points: number[]) {
  console.log(name, points);
}

countPoints("ryan", 1, 2, 3)

// Type: Never

const keepSwimming = (ocean: string) => {
  while (true) {
    console.log(`Swimming through the ${ocean}`)
  }
}

type Status = "Asleep" | "Awake" | "Sleepy" | "Caffeinated";

function dontReachMe(never: never) {}

function bedTime(status: Status) {
  switch(status) {
	  case "Asleep":
		// silly, you're already sleeping
		break;
	  case "Awake":
		// not yet!
		break;
	  case "Sleepy":
		// damn right it is
		break;
    case "Caffeinated":
    // had coffee, cant sleep
    break;
    default:
      dontReachMe(status);
  }
}

bedTime("Awake")


type TypeA = {
  a: string;
  b?: never;
}

type TypeB = {
  b: number;
  a?: never;
}

function test(parameter: TypeA | TypeB) {}

const input = { a: "windows4lyfe", b: 100 }

test(input)


// Type: Unknown

function combine(a: unknown, b: unknown) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  return 0;
}


async function fetchData(path: string): Promise<unknown> {
	const response = await fetch(path);
	return await response.json();
}

type Person = {
  id: string;
  name: string;
}

function isPerson(person: any): person is Person {
  return "id" in person && "name" in person;
}

async function fetchPerson(id: string): Promise<Person | null> {
	const person = await fetchData("/users/5");
	if (person && isPerson(person)) {
		return person;
	}
	return null;
}