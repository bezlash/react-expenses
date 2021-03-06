import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  // appId: "1:596301491987:web:a15a46838c6078cbd134e6"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     });
//     console.log(expenses);
//   })


// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     });
//     console.log(expenses);
//   });


// database.ref('expenses').push({
//   description: 'This is desc',
//   note: 'This is note',
//   amount: 12,
//   createdAt: 1200
// })





// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// setTimeout(() => {
//   database.ref('job/title').set('Manager'); 
// }, 3000);


// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((error) => {
//     console.log('Error fetching data', error);
//   });

// database.ref().set({
//   name: 'Bez Lashkari',
//   age: 38,
//   stressLevel: 7,
//   job: {
//     title: 'Software developer',
//     company: 'New horizons'
//   },
//   location: {
//     city: 'bkk',
//     country: 'Thailand'
//   },
// }).then(() => {
//   console.log('Data saved');
// }).catch((error) => {
//   console.log('Data failed to save', error);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Data removed')
//   })
//   .catch((error) => {
//     console.log(error);
//   });