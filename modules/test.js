
function Set(reps, weight){
    this.reps = reps
    this. weight = weight
}

const newSet = new Set(8, 50)

// console.log(newSet)


//more this tests

const test = "test"

function test1(){
    console.log(this.test)
}

// test1()

const person3 = {
    fname: "Travisse",
    lname: "Hansen",
    fullName: function(){
        console.log(this.fname + " " + this.lname)
    }
}

const person2 = new Person ("Jerry", "Seinfield")

function Person (fname,lname){
    this.fname = fname
    this.lname = lname
    this.logFname = function(){
        console.log(this.fname)
    }
}

// person2.logFname()


const person4 = Object.create(person3)

person4.fname = "Jeff"
person4.lname = "Johnson"
// person4.fullName()


// function Dog(name, age){
//     this.name = name
//     this.age = age 
//     this.bark = function(){
//         console.log(`${this.name} just barked!`)
//     }
// }

// const rusty = new Dog("Rusty", 3)
// const fido = new Dog ("Fido", 1)

// rusty.bark()
// fido.bark()

// function Car (make, model, year) {
//     this.make = make
//     this.model = model
//     this.year = year
//     this.numwheels = 4
// }

// function Motorcycle (make, model, year) {
//     Car.apply(this, arguments)
//     this.numwheels = 2
// }

// const newMoto = new Motorcycle("honda", "zipper", 1999)

// console.dir(newMoto)


function Vehicle (make, model, year) {
    this.make = make
    this.model = model
    this.year = year
    this.isRunning = false
}

Vehicle.prototype.onOrOff = function(toggle){
    if (toggle === "on"){
        this.isRunning = true
    } else if (toggle === "off") {
        this.isRunning = false
    } else {
        console.log("you need to type either 'on' or 'off' ")
    }
}

Vehicle.prototype.honk = function(){
    if (this.isRunning = true){
        console.log("beep")
    } else if (this.isRunning = false) {
        console.log("error or car isn't running")
    }
}

const myCar = new Vehicle ("honda", "civic", 2013)

console.log(myCar)

myCar.onOrOff("on")

console.log(myCar)

// function testy (test) {
//     console.log(test)
// }

// testy("hey")
