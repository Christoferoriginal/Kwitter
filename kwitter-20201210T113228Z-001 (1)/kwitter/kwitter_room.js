
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBL_qd46-rxOaftPzRfxn_LD1mJfbLaMCE",
      authDomain: "kwitter20232012.firebaseapp.com",
      databaseURL: "https://kwitter20232012-default-rtdb.firebaseio.com",
      projectId: "kwitter20232012",
      storageBucket: "kwitter20232012.appspot.com",
      messagingSenderId: "82530555116",
      appId: "1:82530555116:web:979e742d67c7f3aa5e41c9",
      measurementId: "G-WF1N96N2MN"
    };
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("Room Name - " + Room_names);
        row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div<hr>";
        document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
  
function addroom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
 purpose : "adding room name"
});

localStorage.setItem("room_name" , room_name);


window.location="kwitter_page.html";

}

function redirectToRoomName(name)
 {
console.log(name);
localStorage.setItem("room_name" , name);
window.location="kwitter_page.html";
 }

 function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
 }

 function send()
 {
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
})

document.getElementById("msg").value = "";

}