// javaScript closure: a private variable made global for use but not for change:
var counter = (function () {

    var c = 10  // c can be accessed outside of counter() by calling counter(), but can't be changed directly from outside of counter();
    console.log(`inside counter ${c}`)

    return (counting = () => {
        c++;
        console.log(`inside counting ${c}`)
        return (() => {
            c++
            console.log(`inside return ${c}`)
            return (() => {
                c++
                console.log(`inside return again ${c}`)
            })
        })
    })
})

// c can be available and used globally by:
counter()     // inside counter, then inside counting
counter()()   // inside counter, then inside courting, then inside return
counter()()() // inside counter, then inside counting, then inside return, then inside return again

function closureTrial() {
    let a = 0;
    console.log(`\ninside closureTrial: ${a}`)
    function returnHere() {
        a++
        console.log(`inside returnHere: ${a}`)
        function returnAgain() {
            a++
            console.log(`inside returnAgain: ${a}`)
        }
        return returnAgain
    }
    return returnHere
}

closureTrial()
closureTrial()()
closureTrial()()()

// class (${class.properties} -> ${coder.name} == ${this.properties})
const coder = {
    name: 'Lin',
    age: 31,
    time: 7,
    print: function() {
        console.log(`${coder.name} of age ${coder.age} have been coding for more than ${coder.time} years`)
    }
}

let lin = Object.create(coder)
lin.print('she', 0, '6 months', 'blah blah')  // Does not modify print result no matter what's passed in print()

// class Encapsulation
class Person {
    constructor (name, age) {
        this.name = name
        this.age = age
    }

    print_info(job) {
        this.job1 = 'NREL'
        this.job2 = 'Commercial Building Software Engineer'
        console.log(`${this.name} is ${this.age} years old. She will get ${job}, ${this.job1}, and ${this.job2}`);
    }
}

//Inheritance
class Engineer extends Person {
    constructor(name, age, gender) {
        super(name, age)
        this. gender = gender
    }

    toString() {
        console.log(`${this.name}, ${this.gender}, ${this.age} years old`)
    }
}

//object {key: value}
const department = {
    h: 'Hardware',
    f: 'Frimware',
    s: 'Software',
    t: {
        qa: 'QA',
        pve: 'Product validation engineering',
        cve: 'Compatibility validation engineering',
        ft: 'firmware test',
    },
}

let L_A = new Engineer('Lin', 31, department.t.pve)
L_A.toString()

class Motorcycle {
    constructor(brand, make, cc) {
        this.brand = brand
        this.make = make
        this.cc = cc
    }

    toPrint(dollars) {
        console.log(`${this.brand} ${this.make} with ${this.cc} cc is ${dollars}`)
    }
}

var t = new Motorcycle("Triumph", "Thruxton", 1200)
t.toPrint(15000)

class car {
    constructor(brand){
        this.brand = brand
    }

    print_car() {
        if(this.brand == "Audi") {
            this.new_brand = "Farrari"
        } else {
            this.new_brand = this.brand
        }
        console.log(this.new_brand)
    }
}

let audi = new car("Toyota")
audi.print_car()

return new Promise((res, rej) => {
    const a = 0;
    const b = 6;
    if(a-b > 0) res(a-b)
    else rej()
}).then((d) => {console.log(`a is greater than b: ${d}`)})
.catch(() => {
    console.log("WRONG!")
})
