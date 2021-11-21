var firebaseConfig = {
      apiKey: "AIzaSyCi_Jx262r21sN4xgfbqu_ESSs9SYIWGjE",
      authDomain: "kwitterapp-a8d23.firebaseapp.com",
      databaseURL: "https://kwitterapp-a8d23-default-rtdb.firebaseio.com",
      projectId: "kwitterapp-a8d23",
      storageBucket: "kwitterapp-a8d23.appspot.com",
      messagingSenderId: "413868174025",
      appId: "1:413868174025:web:b53130af5c76c3f759fb18"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log(room_name);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
 function logout() {
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location = "index.html";
 }