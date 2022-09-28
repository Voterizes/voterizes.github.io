let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFF00";
tg.MainButton.color = "#FF4500";

let item = '0';


let idAge = document.getElementById("idAge");
let idfirstName = document.getElementById("idfirstName");
let idsecondName = document.getElementById("idsecondName");





document.querySelector("#idButton").onclick = () => {
		tg.MainButton.show();
}




Telegram.WebApp.onEvent("mainButtonClicked", function(){
	// tg.sendData(item); 
	let media = [ ];
		
	media = document.getElementById("idAge").value;
	media = media + document.getElementById("idfirstName").value;
	media = media + document.getElementById("idsecondName").value;
    tg.sendData(media); 
});


let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText =`${tg.initDataUnsafe.first_name}
	${tg.initDataUnsafe.last_name}`;
	
usercard.appendChild(p);
