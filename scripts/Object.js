class Person{
  constructor ({ name, age, status = 'single', degree, address,phone, skills = [], languages = [] }) {
    this.age = age
    this.status = status
    this.degree = degree
    this.address = address
    this.skills = skills
    this.languages = languages
    this.phone = phone
    this._name = name
  }

  printSkills(){
    console.log(`${this._name} skills are ${this.skills}`)
  }

  printInformation(){
    console.log(
      `
        ${this._name} is ${this.age} years old
        he/she is from ${this.address}
        he/she is ${this.status}
        he/she is at ${this.degree}
        his/her skills are ${this.skills}
        he/she study these languages ${this.languages}
        nada contact is ${this.phone}
      `
    )
  }

  printAgeInDays(){
    console.log(`${this.name} age in days is ${this.age * 12 * 30}`)
  }

  canGetALicence(){
    return this.age > 18
  }

  get name () {
    return this._name
  }
}

let nada = new Person({
  name:'nada',
  age:26,
  address:'جنزور شط',
  phone:'0912345678',
  skills:['programming','problem solving','web development'],
  languages:['italy','arabic','english'],
  degree:'4th',
  status:'married'
})

nada.printInformation()
console.log(nada.canGetALicence() ? `${nada.name} can get a licence` : `${nada.name} is still very young`)
nada.printAgeInDays()
nada.printSkills()

console.log("================================================================================")
class Car{
  constructor ({ owner,name,model,color,hasTurbo = false,enginePower = 4,safetyLevel = 50 }) {
    this.owner = owner
    this.name = name
    this.model = model
    this.color = color
    this.hasTurbo = hasTurbo
    this.enginePower = enginePower
    this.safetyLevel = safetyLevel
  }

  printOwnerCanDrive(){
    if(this.owner.canGetALicence()){
      console.log(`${this.owner.name} can drive`)
    }else{
      console.log(`${this.owner.name} is still below 18 and cannot drive`)
    }
  }

  printCarInformation(){
    console.log(
      `
car information is:
        car name is ${this.name}
        ${this.name} is ${this.model} model with ${this.color} color
        engine power is ${this.enginePower}
        safety level is ${this.safetyLevel}
        ${this.name} has ${this.hasTurbo == true ? 'turbo' : 'not any turbo'}
      `
    )
  }

  printCarCanRace(){
    console.log(
      `${this.hasTurbo == true ? 'car can race' : 'car is just a normal car'}`
    )
  }
}

const taxi = new Car({
  name: 'taxi uber',
  model: 'lada 2010',
  color: 'black',
  hasTurbo: false,
  enginePower: 20,
  safetyLevel: 75,
  owner: nada
})

taxi.printCarInformation()
taxi.printOwnerCanDrive()
taxi.printCarCanRace()



class Circle{
  constructor (radius = 1) {
    this.radius = radius
  }

  printPerimeter(){
    console.log(`perimeter of ${this.radius} radius circle is ` + 2 * Math.PI * this.radius)
  }

  printArea(){
    console.log(`area of ${this.radius} radius circle is ` + Math.PI * this.radius * this.radius)
  }

  compareCircles(otherCircle){
    if(otherCircle.radius > this.radius){
      console.log(`the second circle is bigger with ${otherCircle.radius} radius`)
    }else{
      console.log(`the first circle is bigger with ${this.radius} radius`)
    }
  }
}

console.log("========================================================================")

const circle = new Circle(3)
circle.printArea()
circle.printPerimeter()

const otherCircle = new Circle(4)

circle.compareCircles(otherCircle)
