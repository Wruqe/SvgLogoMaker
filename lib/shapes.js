class Shape {
    constructor(textcolor, shapecolor, text) {
      this.textcolor = textcolor;
      this.shapecolor = shapecolor
      this.text = text
    }
  
    settextcolor(newtextcolor) {
      this.textcolor = newtextcolor
    }
    setshapecolor(newshapecolor) {
        this.shapecolor = newshapecolor
    }
    settext(newtext) {
        this.text = newtext
    }
  }
  class Circle extends Shape {
    constructor(textcolor, shapecolor, text) {
        super(textcolor, shapecolor, text)
        
    }
    render(){
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
   
     <circle cx="150" cy="100" r="80" fill="${this.shapecolor}" />
   
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>
   
   </svg>
   `
    }
  }
  class Triangle extends Shape {
    constructor(textcolor, shapecolor, text) {
      super(textcolor, shapecolor, text);
    }
  
    render() {
      return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    
        <polygon points="150,20 100,180 200,180" fill="${this.shapecolor}" />
    
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>
    
      </svg>
      `;
    }
  }
  
  class Square extends Shape {
    constructor(textcolor, shapecolor, text) {
      super(textcolor, shapecolor, text);
    }
  
    render() {
      return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    
        <rect x="50" y="50" width="200" height="200" fill="${this.shapecolor}" />
    
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>
    
      </svg>
      `;
    }
  }

  module.exports = {Square, Circle, Triangle}
  