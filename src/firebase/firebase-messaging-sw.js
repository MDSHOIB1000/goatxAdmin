// importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// // Firebase configuration object
// const firebaseConfig = {
//   apiKey: "AIzaSyCLcimVcCq_VSfqsp-UyaP1FLRiiFg3eBk",
//   authDomain: "paypanda-34650.firebaseapp.com",
//   projectId: "paypanda-34650",
//   storageBucket: "paypanda-34650.appspot.com",
//   messagingSenderId: "762436248429",
//   appId: "1:762436248429:web:d46175acc4dd9b48b27064",
//   measurementId: "G-M264Q8NPWP"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// // Retrieve Firebase Messaging object.
// const messaging = firebase.messaging();

// messaging.onBackgroundMessage((payload) => {
//   console.log(
//     "firebase Received background message ",
//     payload
//   );
  
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: payload.notification.image,
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });