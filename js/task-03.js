function findSmallerNumber(numbers) {
  if (numbers.__proto__ !== Array.prototype) {
    return alert('Введіть масив');
  }

  return Math.min(...numbers);
}

console.log(findSmallerNumber([2, 4, 54, 76, 98, -4, 6]));

function calculateAverage(...numbers) {
  if (numbers.some(number => number.__proto__ !== Number.prototype)) {
    return alert('В масиві є не числові значення!');
  }

  const sum = numbers.reduce((sum, number) => sum + number, 0);

  return sum / numbers.length;
}

console.log(calculateAverage(2, 4, 66));

const calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  sum() {
    return this.a && this.b ? this.a + this.b : alert('No args');
  },
  mult() {
    return this.a && this.b ? this.a * this.b : alert('No args');
  },
};

calculator.read(4, 5);
console.log(calculator.mult());

function letMeSeeYourName(callback) {
  const userName = prompt('What is your name?');

  if (!userName) {
    return alert(`You didn't input your name, try again`);
  }

  callback(userName);
}

function greet(name) {
  console.log(`Hello ${name}`);
}

letMeSeeYourName(greet);

function makeShef(shefName) {
  return function makeDish(dish) {
    console.log(`${shefName} is cooking ${dish}`);
  };
}

const maxym = makeShef('Maxym');
maxym('applecake');
maxym('cheesecake');
maxym('berrycake');
