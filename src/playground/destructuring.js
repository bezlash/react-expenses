// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self' } = book.publisher;

// console.log(publisherName);


const item = ['Coffee', '$2', '$2.51', '$3'];

const [coffee,,mediumcoffee] = item;

console.log(`A medium ${coffee} costs ${mediumcoffee}`);