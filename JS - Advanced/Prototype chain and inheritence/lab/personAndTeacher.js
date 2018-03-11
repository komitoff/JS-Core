function solve() {
  class Person {
    constructor(name, email) {
      this.name = name
      this.email = email
    }

    toString() {
      let className = this.constructor.name
      return `${className} (name: ${this.name}, email: ${this.email})`
    }
  }

  class Teacher extends Person {
    constructor(name, email, subject) {
      super(name, email)
      this.subject = subject
    }

    toString() {
      let parentString = super.toString().slice(0, -1)
      return parentString + `, subject: ${this.subject})`
    }
  }

  class Student extends Person {
    constructor(name, email, course) {
      super(name, email)
      this.course = course
    }

    toString() {
      let parentString = super.toString().slice(0, -1)
      return parentString + `, course: ${this.course})`
    }
  }

  return {Person, Teacher, Student}
}

'Student (name: Stamat, email: stamcho@stamishteto.bg, course: 666'
'Student (name: Stamat, email: stamcho@stamishteto.bg, course: 666)'