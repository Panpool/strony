function save() {	

var checkbox = document.getElementById("checkbox1");
    localStorage.setItem("checkbox1", checkbox.checked);

var checkbox = document.getElementById("checkbox2");
    localStorage.setItem("checkbox2", checkbox.checked);

var checkbox = document.getElementById("checkbox3");
    localStorage.setItem("checkbox3", checkbox.checked);

var checkbox = document.getElementById("checkbox4");
    localStorage.setItem("checkbox4", checkbox.checked);

var checkbox = document.getElementById("checkbox5");
    localStorage.setItem("checkbox5", checkbox.checked);

var checkbox = document.getElementById("checkbox6");
    localStorage.setItem("checkbox6", checkbox.checked);	
}

var checked = JSON.parse(localStorage.getItem("checkbox1"));
    document.getElementById("checkbox1").checked = checked;
	
var checked = JSON.parse(localStorage.getItem("checkbox2"));
    document.getElementById("checkbox2").checked = checked;

var checked = JSON.parse(localStorage.getItem("checkbox3"));
    document.getElementById("checkbox3").checked = checked;

var checked = JSON.parse(localStorage.getItem("checkbox4"));
    document.getElementById("checkbox4").checked = checked;
	
var checked = JSON.parse(localStorage.getItem("checkbox5"));
    document.getElementById("checkbox5").checked = checked;

var checked = JSON.parse(localStorage.getItem("checkbox6"));
    document.getElementById("checkbox6").checked = checked;
	
