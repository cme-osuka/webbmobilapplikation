
function stringMultiplier(text: string, multiplier: number) {
  return text.repeat(multiplier);
}
//console.log(stringMultiplier("hej", 5))





// Objekt + Optional
function example(coords: { x: number; y: number, z?: number }) {
  if (coords.z) {
    return coords.z;
  }
  return coords;
}

//example({ x: 1, y: 2 })
//example({ x: 1, y: 2, z: 1 })

// type
type CoordsType = { x: number; y: number, z?: number }

function example2(coords: CoordsType) {
  if (coords.z) {
    return coords.z;
  }
  return coords;
}
// Petters fråga
/*type UserData = {
  name: string;
  lastname: string;
  age: number;
  isAdmin: boolean;
}

type UserList = UserData[];

function getUser() {
  const data = axios.get<UserList>("/user")


}*/

// Antons fråga

/*function getUser(): void {
  console.log("Hello");
}

const result = getUser();
console.log(result);*/

/*type Operation = 'multiply' | 'add' | 'divide';

const calculator = (a: number, b: number, op: Operation) => {
  if (op === 'multiply') {
    return a * b;
  } else if (op === 'add') {
    return a + b;
  } else if (op === 'divide') {
    if (b === 0) return 'can\'t divide by 0!';
    return a / b;
  }
}

calculator(1, 2, "add")*/