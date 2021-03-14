
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDpiQosk80TGGHdqasGIV61WVqITSvdGFo",
    authDomain: "kwitter-7b39c.firebaseapp.com",
    databaseURL: "https://kwitter-7b39c-default-rtdb.firebaseio.com",
    projectId: "kwitter-7b39c",
    storageBucket: "kwitter-7b39c.appspot.com",
    messagingSenderId: "554819466565",
    appId: "1:554819466565:web:ebdad5b84d02fea3bffa2c",
    measurementId: "G-CH5Q73284Q"
  };
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome"+ user_name + "!";

  function addRoom()
  {
        Room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(Room_name).update({
              purpose: "adding room name"
        });
        localStorage.setItem("Room_name",Room_name);
        window.location="kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
