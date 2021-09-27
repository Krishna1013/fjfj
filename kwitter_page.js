//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyAnY0HabTCAdJaapGbNTENGJzHiDk4uoa4",
      authDomain: "kwiter-2c790.firebaseapp.com",
      projectId: "kwiter-2c790",
      storageBucket: "kwiter-2c790.appspot.com",
      messagingSenderId: "1050292696697",
      appId: "1:1050292696697:web:0e8c27d5c40249a3e186a8"
    };
    
    const app = initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
