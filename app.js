let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFF00";
tg.MainButton.color = "#FF4500";

let item = '0';

function addHidden(event){
    event.classList.add('hidden');
}


function addHidden_2(one, two, three){
    document.getElementById(one).hidden = true;
	document.getElementById(two).hidden = true;
	document.getElementById(three).hidden = true;
}

function removeHidden(event){
    event.classList.remove('hidden');
}

function removeHidden_2(one){
    document.getElementById(one).hidden = false;
}

document.querySelector("#idButton").onclick = () => {
	let ageId = document.querySelector('#idAge').value;
	let firstNameid = document.querySelector('#idfirstName').value;
	let secondNameid = document.querySelector('#idsecondName').value;
	
      event.preventDefault();
	  //addHidden(idAge);
	  
	  //addHidden_2('idfirstName');
	 
	 setTimeout(function() {
		addHidden_2('idAge', 'idfirstName', 'idsecondName');
	}, (1 * 1600));

	 setTimeout(function() {
		//removeHidden_2('idAge', 'idfirstName', 'idsecondName');
	}, (1 * 1200));
	


	

	
	if (secondNameid != "" && firstNameid != "" && ageId != "" ) {
	
	
	tg.sendData([secondNameid,firstNameid,ageId].join('¿'));
	
	};
	
	
	
	
	
}



// let usercard = document.getElementById("usercard");

// let p = document.createElement("p");

// p.innerText =`${tg.initDataUnsafe.first_name}
//	${tg.initDataUnsafe.last_name}`;
	
// usercard.appendChild(p);


