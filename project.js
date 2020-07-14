
var result = [];
function register() {
	var pseudo = $("#pseudo").val();
	var firstname = $("#FirstName").val();
	var lastname = $("#LastName").val();
	var password = $("#password").val();
	var obj = {};
	 obj["pseudo"] = pseudo;
	 obj["firstname"] = firstname;
	 obj["lastname"] = lastname;
	 obj["password"] = password;
	 result.push(obj);
	 localStorage.setItem("pseudos",JSON.stringify(pseudo));
	 localStorage.setItem("firstnames",JSON.stringify(firstname));
	 localStorage.setItem("lastnames",JSON.stringify(lastname));
	 localStorage.setItem("passwords",JSON.stringify(password));
};

  	var pseudoslength = (localStorage.getItem("pseudos").length) -1;
    var localPseudo = localStorage.getItem("pseudos").substring(1, pseudoslength);
	var passwordlength = (localStorage.getItem("passwords")).length -1;
	var localpassword = localStorage.getItem("passwords").substring(1, passwordlength);




$("#result").click(function(){
	var newPseudo = $("#pseudo1").val();
	var newPassword = $("#password1").val();
	if (localPseudo === newPseudo && localpassword === newPassword) {
		alert("Great! You Are Signed In");
	}
	else if (localPseudo === newPseudo && localpassword !== newPassword) {
		alert("Your Password is Wrong!")
	}
	else if (localPseudo !== newPseudo && localpassword === newPassword) {
		alert("Your Pseudo is Wrong!")
	}
	else {
		alert("Try sign up first!")
	}
})
