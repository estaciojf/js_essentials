function f1 () {
  console.log('Eu sou uma função 1...')
};

const f2 = function() {
  console.log('Eu sou uma função 2...')
}

const f3 = () => {
  console.log('Eu sou uma arrow function..... Alteracao')
}

const sumTwoNumbers = (a, b) => a + b;

const addOne = number => number + 1;

const isTrue = () => true;

f1()
f2()
f3()
console.log(sumTwoNumbers(1, 2))
console.log(addOne(10))
console.log(isTrue())