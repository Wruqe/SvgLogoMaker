const {Square, Circle, Triangle} = require('./shapes')

describe('Current Shape classes', () => {
  test('Circle render shape', () => {
    const circle = new Circle('black', 'red', 'C');
    const svg = `<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
  
      <circle cx="150" cy="100" r="80" fill="red" />
  
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">C</text>
  
    </svg>
    `;
    expect(circle.render()).toEqual(svg);
  });

  test('Triangle render shape', () => {
    const triangle = new Triangle('black', 'blue', 'T');
    const svg = `<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
  
      <polygon points="150,20 100,180 200,180" fill="blue" />
  
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">T</text>
  
    </svg>
    `;
    expect(triangle.render()).toEqual(svg);
  });

  test('Square render shape', () => {
    const square = new Square('black', 'green', 'S');
    const svg = `<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
  
      <rect x="50" y="50" width="200" height="200" fill="green" />
  
      <text x="150" y="150" font-size="60" text-anchor="middle" fill="black">S</text>
  
    </svg>
    `;
    expect(square.render()).toEqual(svg);
  });
});
