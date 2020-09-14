
let loggedInUser = Cookies.get("useremail");
let tokenUser = Cookies.get("usertoken");

function removeCookie() {
    Cookies.remove("useremail");
    Cookies.remove("usertoken");
    window.open("index.html");
}

if (loggedInUser == undefined) {
    document.getElementById("welcome").innerHTML = "No user is logged in!";
} else {
    document.getElementById("welcome").innerHTML = "Welcome :  " + '"' + loggedInUser + '"';
    document.getElementById("line").innerHTML = "----------------------------------------------";
}

let ajax = new XMLHttpRequest();
ajax.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {

        let colorData = JSON.parse(this.responseText);
        document.getElementById("color-data").innerHTML = " ";

        for (i = 0; i < colorData.data.length; i++) {
            let shownames = colorData.data[i].name;
            let showyear = colorData.data[i].year;
            let showcolors = colorData.data[i].color;

            document.getElementById("color-data").innerHTML += "<h3>" + "Name: " + shownames + "</h3>" + "<br>";
            document.getElementById("color-data").innerHTML += "<h3>" + "Year Created: " + showyear + "</h3>" + "<br>";
            document.getElementById("color-data").innerHTML += "<div class='box' >  </div>";
            let box = document.getElementsByClassName('box');
            box[i].style.backgroundColor = showcolors;
            document.getElementById("color-data").innerHTML += "----------------------------------------------";

        }
    }

    else if (this.readyState != 4) {
        document.getElementById("color-data").innerHTML = "Loading.."
    }
    else {
        document.getElementById("color-data").innerHTML = "There's an error!"
    }
}

ajax.open("GET", " https://reqres.in/api/unknown", true);
ajax.send();

function openPage()
{
   location.replace("../index.html")
}




