let greetings: string = "Hello, TypeScript!";

let mynum: number = 42;
//greetings. // it shows all the string methods 
console.log(greetings);

let isActive: boolean = true;


export {};//removes error temporarily

let username: string = "Alisha";
let age: number = 22;
let isDeveloper: boolean = true;

console.log(`User: ${username}, Age: ${age}`);

function add(a: number, b: number): number {
    return a + b;
  }
  
  console.log(add(10, 20)); // 30

 
  const greet = (name: string): string => {
    return `Hello, ${name}!`;
  };
  
  console.log(greet("World"));

  interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
  }
  
  const user: User = {
    id: 1,
    name: "Alisha",
    email: "alisha@gmail.com",
    isActive: true
  };
  
  console.log(user.name);

  class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hi, I am ${this.name}`);
    }
  }
  
  const p1 = new Person("Aman", 25);
  p1.greet();

  
  const numbers: number[] = [1, 2, 3, 4];

function getFirst<T>(arr: T[]): T {
  return arr[0];
}

console.log(getFirst(numbers)); // 1

async function fetchData(): Promise<string> {
    return "Data loaded successfully!";
  }
  
  fetchData().then(data => console.log(data));
  
