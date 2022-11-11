// const foo = () => {
//   console.log('Hello!!');
// };

// const id = setTimeout(foo, 3000);

// console.log(id);

// clearTimeout(id);

// console.log('Before');

// setTimeout(() => {
//   console.log('Call');
// }, 0);

// console.log('After');

// console.log('After After');

const PROMPT_DELAY = 2000;
const MAX_PROMT_ATTEMPTS = 3;
let interId = null;

let promtCounter = 0;
let hasSubscribe = false;

interId = setInterval(() => {
  if (promtCounter === MAX_PROMT_ATTEMPTS || hasSubscribe) {
    clearInterval(interId);
    return;
  }

  hasSubscribe = confirm('Подпишись, пожалуйста!!!');
  promtCounter += 1;
}, PROMPT_DELAY);
