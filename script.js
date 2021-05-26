
function validar() {
    var firstname = document.querySelector(".firstname").value;
    var lastname = document.querySelector(".lastname").value;
    var email = document.querySelector(".email").value;
    var password = document.querySelector(".password").value;
    if (firstname === "" || 
        lastname === "" || 
        email === "" || 
        password === "")  {
        alert("The fields cannot be empty");
    }
}
