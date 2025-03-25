const firebaseConfig = {
    apiKey: "AIzaSyBCi5P5sXqqr6Z0pJU65MKqkZja2zi60U0",
    authDomain: "book-store-34282.firebaseapp.com",
    projectId: "book-store-34282",
    storageBucket: "book-store-34282.firebasestorage.app",
    messagingSenderId: "386958225794",
    appId: "1:386958225794:web:8177b10e77319a9b1b9f9b",
    measurementId: "G-6NQ50TMLNS"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  //   signup
  function go() {
    let email = document.getElementById("name").value;
    let password = document.getElementById("pass").value;
    console.log(email, password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        window.location.href = "home.html";
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        // ..    
      });
  }
  
  // -------------------------------------------------------------
  // login 
  function hlo() {
    let email = document.getElementById("name").value;
    let password = document.getElementById("pass").value;
    console.log(email, password);
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        window.location.href = "home.html"
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  }