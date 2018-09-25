
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDMFDDjbk7tOEeqsO_evebul166VQl4CR0",
        authDomain: "first-lesson-a81e0.firebaseapp.com",
        databaseURL: "https://first-lesson-a81e0.firebaseio.com",
        projectId: "first-lesson-a81e0",
        storageBucket: "first-lesson-a81e0.appspot.com",
        messagingSenderId: "213223109314"
    };
    firebase.initializeApp(config);

var database = firebase.database();
var yourname = "NoName"

function changeName (name){
    yourname = name
}

function notify (bericht){
   
       var not =  new Notification(title = bericht);
    
}

function getMessage(data) {
    var messages = Object.values(data.val());
    console.log(messages);
    document.getElementById("chatWindow").innerHTML = ""
   messages.forEach((bericht)=>{

        message = document.createElement("div")
        var name = document.createElement("span")
        var text = document.createElement("span")
        name.innerText = Object.keys(bericht)[0];
        text.innerText = Object.values(bericht)[0];
        name.setAttribute("id", "name")
        text.setAttribute("id", "message")
        message.appendChild(name);
        message.appendChild(text);
        document.getElementById("chatWindow").appendChild(message)
        updateScroll();
        
    }
   
)


notify(messages[messages.length-1])
}

function sendMessage(message) {
    database.ref("messages/").push(JSON.parse('{"'+yourname+'":"'+message+'"}'));
}
function sendFromPage(e){
    e.preventDefault();
    message = document.getElementById("mess").value;
    document.getElementById("mess").value = "";
    sendMessage(message)
}

function changeNameFromPage(e){
    e.preventDefault()

    changeName(document.getElementById("changeName").value)
    document.getElementById("nameForm").remove()
    document.getElementById("chatElements").classList.remove("invisible")

}
document.getElementById("send").addEventListener("click", sendFromPage);
document.getElementById("changeNameButton").addEventListener("click", changeNameFromPage)


database.ref("messages/").on("value", getMessage)

var element = document.getElementById("chatWindow");
element.scrollTop = element.scrollHeight;
function updateScroll(){
    var element = document.getElementById("chatWindow");
    element.scrollTop = element.scrollHeight;
}