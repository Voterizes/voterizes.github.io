let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFF00";
tg.MainButton.color = "#FF4500";

let item = '0';



document.querySelector("#idButton").onclick = () => {
	let ageId = document.querySelector('#idAge').value;
	let firstNameid = document.querySelector('#idfirstName').value;
	let secondNameid = document.querySelector('#idsecondName').value;
	
	
	if (secondNameid != "" && firstNameid != "" && ageId != "" ) {
	
	
	tg.sendData([secondNameid, firstNameid, ageId]);
	
	};
	
	
	
	
	
}




// let usercard = document.getElementById("usercard");

// let p = document.createElement("p");

// p.innerText =`${tg.initDataUnsafe.first_name}
//	${tg.initDataUnsafe.last_name}`;
	
// usercard.appendChild(p);
