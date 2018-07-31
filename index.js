let jSImage = ()=>{
	document.getElementById("techNoImages").style.backgroundImage ="none";
	document.getElementById("tech").style.backgroundImage ="url('images/javascript-logo.png')";
	}

let htmlImage = ()=>{
	document.getElementById("techNoImages").style.backgroundImage ="none";
	document.getElementById("tech").style.backgroundImage ="url('images/html-css.jpg')";

}

let jQImage = ()=>{
	document.getElementById("techNoImages").style.backgroundImage ="none";
	document.getElementById("tech").style.backgroundImage ="url('images/jquery-logo.png')";
	

}

let angularImage = ()=>{
	document.getElementById("techNoImages").style.backgroundImage ="none";
	document.getElementById("tech").style.backgroundImage ="url('images/angular-logo.png')";
	

}

let njsImage = ()=>{
	document.getElementById("techNoImages").style.backgroundImage ="none";
	document.getElementById("tech").style.backgroundImage ="url('images/nodejs-logo.png')";
	

}

let ioImage = ()=>{
	document.getElementById("techNoImages").style.backgroundImage ="none";
	document.getElementById("tech").style.backgroundImage ="url('images/ionic.jpg')";
	

}

let pythonImage = ()=>{
	document.getElementById("techNoImages").style.backgroundImage ="none";
	document.getElementById("tech").style.backgroundImage ="url('images/python.png')";
	

}

let cImage = ()=>{
	document.getElementById("techNoImages").style.backgroundImage ="none";
	document.getElementById("tech").style.backgroundImage ="url('images/csharp.png')";
	

}

let mdbImage = ()=>{
	document.getElementById("techNoImages").style.backgroundImage ="none";
	document.getElementById("tech").style.backgroundImage ="url('images/mongodb.png')";


}

let revert = ()=>{
	document.getElementById("tech").style.backgroundImage ="none";
	document.getElementById("techNoImages").style.backgroundImage ="url('images/tech.jpg')";
	
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}