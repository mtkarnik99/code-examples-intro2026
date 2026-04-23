// ============================================
// PROPERTIES & METHODS
// ============================================

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022
};

// Accessing properties using dot notation and bracket notation
console.log(car.brand);
console.log(car["model"]);

// Adding a new property to an existing object
car.color = "Black";
console.log(car);


// ============================================
// THE "this" KEYWORD
// ============================================

// "this" refers to the object the method belongs to
// Notice both students use the same introduce() method
// but "this" gives a different result for each one

const student1 = {
    name: "Ethan",
    grade: "A",
    introduce() {
        console.log("Hi, my name is " + this.name + " and my grade is " + this.grade);
    }
};

const student2 = {
    name: "Nataly",
    grade: "B",
    introduce() {
        console.log("Hi, my name is " + this.name + " and my grade is " + this.grade);
    }
};

student1.introduce();
student2.introduce();


// ============================================
// NESTED OBJECTS
// ============================================

// Objects can contain other objects as values
// Access nested properties by chaining dot notation

const user = {
    name: "Vanessa",
    age: 28,
    address: {
        city: "Dallas",
        state: "Texas"
    },
    changeName(newName) {
        this.name = newName;
    }
};

console.log(user);
console.log(user.address);
console.log(user.address.state);

// Calling a method that updates a property using "this"
user.changeName("Maria");
console.log(user);


// ============================================
// LOOPING THROUGH AN OBJECT
// ============================================

// for...in loops through every key in an object
// We use bracket notation to get the value because "key" is a variable

const product = {
    name: "Laptop",
    brand: "Dell",
    price: 999,
    inStock: true
};

for (let key in product) {
    console.log(key + ": " + product[key]);
}


// ============================================
// CONSTRUCTORS
// ============================================

// Writing out every object manually is fine for a few objects
// but gets tedious fast -- constructors solve this

const bookA = { title: "The Alchemist", author: "Coelho", pages: 208 };
const bookB = { title: "Atomic Habits", author: "Clear", pages: 320 };
// What if we had 100 books?

// A constructor lets us create objects from a reusable template
// By convention, constructor names start with a capital letter
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

const book1 = new Book("The Alchemist", "Coelho", 208);
const book2 = new Book("Atomic Habits", "Clear", 320);

console.log(book1);
console.log(book2);


// ============================================
// OBJECTS VS ARRAYS
// ============================================

// Use an array when storing a list of items
const names = ["Ethan", "Nataly", "Vanessa", "Marcus"];
console.log(names);

// Use an object when describing one thing with named properties
const student = {
    name: "Ethan",
    grade: "A",
    age: 22
};
console.log(student);

// Objects and arrays work well together
// An object can hold an array as one of its properties
const studentWithFriends = {
    name: "Ethan",
    grade: "A",
    age: 22,
    friends: ["Nataly", "Vanessa", "Marcus"]
};
console.log(studentWithFriends.friends);

// An array can also hold multiple objects -- this is very common with real data
const books = [
    { title: "The Alchemist", author: "Coelho", pages: 208 },
    { title: "Atomic Habits", author: "Clear", pages: 320 },
    { title: "Deep Work", author: "Newport", pages: 304 }
];
console.log(books);