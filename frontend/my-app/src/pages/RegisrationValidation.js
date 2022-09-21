export default function()
{
    
   // var resultEmailCheck = emailCheck(document.forms["Registration form"]["email"].value);
     var entry = alphaNumCheck(document.getElementById("Name").value);
     var Username = alphaNumCheck(document.getElementById("Username").value);
     var password = passwordCheck(document.getElementById("Password").value);
     var email = emailCheck(document.getElementById("email").value);
    if(!email)
    {
        alert("Invalid Email");
    }
    else if(!Username)
    {
        alert("Username must be alphanumeric");
    }
     if(!entry)
     {
            alert("A name must be entered");
     }
     if(!password)
     {
            alert("Password must have at least one capital letter and a number");
     }

     if(entry && password)
     {
            alert("Registration Successful");
     }

    if(email && Username && password && entry)
    {
        alert("Registration Successful");
        //send data to backend server here 
        return true;
    }
}


export function alphaNumCheck(entry) {
    let regex = /^[a-z0-9]+$/i;
    if (entry != null && entry.match(regex)) {
        return true;
    } else {
        return false;
    }
}
//check if password has two captial letters and a number
export function passwordCheck(password) {

    var capital = 0;
    var number = 0;
    for (var i = 0; i < password.length; i++) {
        if (password.charAt(i) >= 'A' && password.charAt(i) <= 'Z') {
            capital++;
        }
        if (password.charAt(i) >= '0' && password.charAt(i) <= '9') {
            number++;
        }
    }
    if (capital >= 1 && number >= 1) {
        return true;
    } else {
        return false;
    }
}

//check if email is valid
export function emailCheck(email) {
    var atSplit = email.split('@');
    if (atSplit.length == 2 && alphaNumCheck(atSplit[0])) {
        var periodSplit = atSplit[1].split('.')
        if (periodSplit.length == 2 && alphaNumCheck(periodSplit[0] + periodSplit[1])) {
            return true;
        }
    }
    return false;
}



function nameCheck() {
	if (alphaNumCheck(document.getElementById("Name").value)){
		return true;
	}
	return false;
}
