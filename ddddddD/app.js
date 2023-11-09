document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems);
});

const firebaseConfig = {
  apiKey: "AIzaSyDbr5EzXkWBbxqIfqdgpcMfRmmM2jiyoF4",
  authDomain: "rdyghtrf.firebaseapp.com",
  projectId: "rdyghtrf",
  storageBucket: "rdyghtrf.appspot.com",
  messagingSenderId: "1050338634825",
  appId: "1:1050338634825:web:e29f2a9f46fa6514ea2398",
  measurementId: "G-JMDW6SS55Z",
};
firebase.initializeApp(firebaseConfig);

function signup() {
  const email = document.getElementById("singupemail");
  const pass = document.getElementById("singuppassword");
  firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, pass.value)
    .then((userCredential) => {
      // Signed in 
    var user = userCredential.user;
   console.log(user)
    
  })
    .catch((error) => {
      alert("user not sing up successfull");
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      M.toast({ html: error.message });
    });
  M.modal.getInstance(myModal[0].close());
}

function Login() {
  var email = document.getElementById("Loginemail");
  var pass = document.getElementById("loginpassword");
  firebase
    .auth()
    .singInWithEmailAndPassword(email.value, pass.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      firebase.auth().currentUser.sendEmailVerification()
      .then(() => {
        alert("chal beta gmail per ja..")
      });
    })
    .catch((error) => {
      alert("user not login successfull");
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      M.toast({ html: error.message, classes: "Red" });
    });
  M.modal.getInstance(myModal[1].close());
}

function logout() {
  firebase.auth().singOut();
  alert("user logout succesfull");
}
function loginWithGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();firebase.auth()
  .getRedirectResult()
  .then((result) => {
    if (result.credential) {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // ...
    }
    // The signed-in user info.
    var user = result.user;
    // IdP data available in result.additionalUserInfo.profile.
      // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  
}
