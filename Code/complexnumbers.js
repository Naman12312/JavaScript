class Complex {
    constructor(real, imaginary) {
      this.real = real
      this.imaginary = imaginary
    }
    add(num) {
      this.real = this.real + num.real
      this.imaginary = this.imaginary + num.imaginary
  
    }
  
    get real() {
      return this._real
    }
  
    get imaginary() {
      return this._imaginary
    }
  
    set imaginary(newImaginary) {
      this._imaginary = newImaginary
    }
  
    set real(newReal) {
      this._real = newReal
    }
  }
  
  let a = new Complex(2, 4)
  
  console.log(a.real) //this works as the constructor uses the setter to set the property and the setter is setting it as this._real.