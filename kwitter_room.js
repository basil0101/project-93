const firebaseConfig = {
    apiKey: "AIzaSyCb0iNHYVOYRgI8vbuDlP2rlS55KquOlZI",
    authDomain: "kwitter-bffad.firebaseapp.com",
    databaseURL: "https://kwitter-bffad-default-rtdb.firebaseio.com",
    projectId: "kwitter-bffad",
    storageBucket: "kwitter-bffad.appspot.com",
    messagingSenderId: "1068152045207",
    appId: "1:1068152045207:web:e33fd75bcb0832a8f5f3d2"
  };
  
  
  const app = initializeApp(firebaseConfig);
  username=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+username+"!";

  function addroom(){
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose:"adding room name"
        });
        localStorage.setItem("room_name",room_name);
        window.location="kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log("Room Name "+Room_names);
     row="<div class="room_name" id="+Room_names+" onclick="redirectToRoomName(this.id)">#"+Room_names+"</div> <hr>";
     document.getElementById("output").innerHTML+= row;
    

    
    });});}

    function redirectToRoomName(name){
          console.log(name);
          localStorage.setItem("room_name",name);
          window.location="kwitter_page.html";
    }

getData();