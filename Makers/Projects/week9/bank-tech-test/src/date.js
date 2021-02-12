class DateClass {
  constructor() {
    this.date = new Date();
  }

  getDate() {
    return this.date.getDate();
  }

  getMonth() {
    return this.date.getMonth() + 1
  }

  getYear() {
    return this.date.getFullYear();
  }

  format() {
    return `${this.getDate()}/${this.getMonth()}/${this.getYear()}`
  }
}