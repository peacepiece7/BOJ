const start = new Date();
const N = [];
for (let i = 1; i <= 10000; i++) {
  N.push(i);
}

const copyN = [...N];
for (let i = 0; i <= N.length - 1; i++) {
  const notSelfNumber = N[i] + Math.floor(Math.floor((N[i] / 1000) % 10) + Math.floor((N[i] / 100) % 10) + Math.floor((N[i] / 10) % 10) + Math.floor((N[i] / 1) % 10));
  if (copyN.includes(notSelfNumber) && notSelfNumber <= 10000) {
    copyN.splice(copyN.indexOf(notSelfNumber), 1);
  }
}

copyN.forEach((value) => console.log(value));
const done = new Date();
