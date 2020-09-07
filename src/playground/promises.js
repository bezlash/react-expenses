const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('This is resolved data');
    reject('eeror')
  }, 3000);
});

console.log('before');
promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error)
})
console.log('after');