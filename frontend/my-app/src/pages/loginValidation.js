export default function ()
{
    var Username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;
    if(!alphaNumCheck(Username) || !alphaNumCheck(password))
    {
        alert("Username and Password must entered");
        return false;
    }
    return true;
}

function alphaNumCheck(entry) {
    let regex = /^[a-z0-9]+$/i;
    if (entry != null && entry.match(regex)) {
        return true;
    } else {
        return false;
    }
}