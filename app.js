let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFF00";
tg.MainButton.color = "#FF4500";

let item = '0';


let idAge = document.getElementById("idAge");
let idfirstName = document.getElementById("idfirstName");
let idsecondName = document.getElementById("idsecondName");





document.querySelector("#idButton").onclick = () => {
	let ageId = document.querySelector('#idAge').value;
	let firstNameid = document.querySelector('#idfirstName').value;
	let secondNameid = document.querySelector('#idsecondName').value;
}




Telegram.WebApp.onEvent("mainButtonClicked", function(){
	// tg.sendData(item); 
	let media = [ ];
		
	media = document.getElementById("idAge");
	media = document.getElementById("idfirstName");
	media = document.getElementById("idsecondName");
    tg.sendData("Pro_media"); 
});


let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText =`${tg.initDataUnsafe.first_name}
	${tg.initDataUnsafe.last_name}`;
	
usercard.appendChild(p);
