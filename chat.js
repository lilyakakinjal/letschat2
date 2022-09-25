// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBX7dHsmAylZd-c3KNloOAavb8qXB5lE94",
    authDomain: "kggghghgjh.firebaseapp.com",
    projectId: "kggghghgjh",
    storageBucket: "kggghghgjh.appspot.com",
    messagingSenderId: "279719222608",
    appId: "1:279719222608:web:314dcc152f7f26cec32055",
    measurementId: "G-N9SCDYXFJM"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



