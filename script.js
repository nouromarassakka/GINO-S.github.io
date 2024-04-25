function myFunction() {
    var txt;
    if (confirm("login please")) {
      txt = "";
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById("noo").innerHTML = txt;
  }
  function mOver(obj) { //to change login button
    obj.innerHTML = "Thank You"
  }
  
  function mOut(obj) {
    obj.innerHTML = "login"
  }
  function changeText(id) {
    id.innerHTML = "Ur homee!!";
  }