
let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFF00";
tg.MainButton.color = "#FF4500";

let item = '0';


let json =
{
"Sex" : [],
"Aim" : [],
"Height" : [],
"Age_Aim" : [],
"Date_Birth" : [],
"User_name" : "",
"Description" : ""
};


// Делаем первую букву Заглавной
function capitalizeFirstLetter(strng) {
	let newStr = strng[0].toUpperCase() + strng.slice(1);

    return newStr;
}

//  лишняя функция
function blinkHiddenText(idRi){
	var vakId = document.querySelector(idRi);
    vakId.classList.add("richard2");
	
	vakId = document.querySelector(".hidden2");
	vakId.classList.add("wrapper");
	vakId.classList.remove("hidden2");
	
	setTimeout(function() {
	vakId.classList.add("hidden2");
	vakId.classList.remove("wrapper");
	
	}, (1 * 3000));
}


// Отображаем скрытую форму
function changeClassVissibility(event){
    event.classList.add("vissible");
	event.classList.remove("hidden");
}



function nextRemoveDiv(increment) {
	// Сначала отображаем следующий див добавляя vissible. Далее удаляем лишний hidden
	if (increment<7) { console.log("Шаг = ", increment); var next = document.querySelector(".hidden"); 	changeClassVissibility(next); }
	// Теперь Находим ПЕРВЫЙ див с vissible и удаляем его к чертям
	var second = document.querySelector(".vissible")
	second.remove();
	
}	



function valSex(one, two) {
        var on = document.getElementById(one)
		var tw = document.getElementById(two)
        if (on.checked) { /*Добавляем в последний элемент массива*/  json.Sex.push(on.value); }
		if (tw.checked) { json.Sex.push(tw.value);  }

		if (on.checked != true && tw.checked != true) { console.log("ЧЁКНУТЫХ У НАС НЕТ"); return false;}        
		console.log(json);
    }
	

function valAim(one, two, three, four) {
        var on = document.getElementById(one)
		var tw = document.getElementById(two)
		var th = document.getElementById(three)
		var fo = document.getElementById(four)
	
        if (on.checked) { json.Aim.push(on.value);  }
		if (tw.checked) { json.Aim.push(tw.value);  }
		if (th.checked) { json.Aim.push(th.value);  }
		if (fo.checked) { json.Aim.push(fo.value);  }
		
		if (on.checked != true && tw.checked != true && th.checked != true && fo.checked != true) { console.log("ЧЁКНУТЫХ У НАС НЕТ"); return false;}
        console.log(json);
    }
	
function valHeight(one, two, three, four) {
        var on = document.getElementById(one)
		var tw = document.getElementById(two)
		var th = document.getElementById(three)
		var fo = document.getElementById(four)
	
        if (on.checked) { json.Height.push(on.value);  }
		if (tw.checked) { json.Height.push(tw.value);  }
		if (th.checked) { json.Height.push(th.value);  }
		if (fo.checked) { json.Height.push(fo.value);  }
		
		if (on.checked != true && tw.checked != true && th.checked != true && fo.checked != true) { console.log("ЧЁКНУТЫХ У НАС НЕТ"); return false;}
        console.log(json);
    }

function valAge_Aim(one, two, three, four) {
        var on = document.getElementById(one)
		var tw = document.getElementById(two)
		var th = document.getElementById(three)
		var fo = document.getElementById(four)
	
        if (on.checked) { json.Age_Aim.push(on.value);  }
		if (tw.checked) { json.Age_Aim.push(tw.value);  }
		if (th.checked) { json.Age_Aim.push(th.value);  }
		if (fo.checked) { json.Age_Aim.push(fo.value);  }
		
		if (on.checked != true && tw.checked != true && th.checked != true && fo.checked != true) { console.log("ЧЁКНУТЫХ У НАС НЕТ"); return false;}
        console.log(json);   
    }	
	

function valDate() {
	var selectYear = document.getElementById('selectYear');
	json.Date_Birth[0]= selectYear.value;
	
	var selectDate = document.getElementById('selectDate');
	json.Date_Birth[1]= selectDate.value;
	
	var selectMonth = document.getElementById('selectMonth');
	json.Date_Birth[2]= selectMonth.value;
	
	console.log(json);
	
    return   selectYear.value;
    }	
	

//document.addEventListener('DOMContentLoaded', function() { valName(); valName_2(); });

function valName() {
	var valNam = document.querySelector('#idfirstName').value;
	
	return valNam;
}

        
function valText() {
	var valTex = document.querySelector('#idContent').value;
	
	return valTex;
}
   	


document.querySelector("#btn_1").onclick = () => {
	event.preventDefault();
	var radioCheck = valSex('radio-1', 'radio-2');
	if(radioCheck !=false) nextRemoveDiv(1); else { blinkHiddenText("#pSex"); };
}

document.querySelector("#btn_2").onclick = () => {
	event.preventDefault();
	var checkBoxCheck = valAim('checkbox_1', 'checkbox_2', 'checkbox_3', 'checkbox_4');
	if(checkBoxCheck !=false) nextRemoveDiv(2);  else { blinkHiddenText("#pAim")};
}

document.querySelector("#btn_3").onclick = () => {
	event.preventDefault();
	var checkBoxCheck = valHeight('checkbox_5', 'checkbox_6', 'checkbox_7', 'checkbox_8');
	if(checkBoxCheck !=false) nextRemoveDiv(3);   else { blinkHiddenText("#pGrowth")};
}

document.querySelector("#btn_4").onclick = () => {
	event.preventDefault();
	var checkBoxCheck = valAge_Aim('checkbox_9', 'checkbox_10', 'checkbox_11', 'checkbox_12');
	if(checkBoxCheck !=false) nextRemoveDiv(4);   else { blinkHiddenText("#pAge")};
}

document.querySelector("#btn_5").onclick = () => {
	event.preventDefault();
	var textDate = valDate();
	
	if(textDate !="1942") nextRemoveDiv(5);   else { blinkHiddenText("#pDate")};
}

document.querySelector("#btn_6").onclick = () => {
	event.preventDefault();
	var textInput = valName();
	//var r = /\d+/;
	var r = /[^а-яА-ЯёЁ\-]/g;
	
	
	if (textInput.match(r) ) {  textInput =""; } // если содержит цифры то удаляем
	if(textInput !="") { textInput = capitalizeFirstLetter(textInput); json.User_name = textInput;  nextRemoveDiv(6); }  else { blinkHiddenText("#pName")};
}

document.querySelector("#btn_7").onclick = () => {
	event.preventDefault();
	var textInput = valText();
	var r = /[a-z]+/i;
	var d = /\d+/;
	
	if (textInput.match(r) || textInput.match(d) ) {  textInput =""; } // если содержит цифры то удаляем
	if(textInput !="") { json.Description = textInput ; console.log(json); jsonRes = JSON.stringify(json);  console.log(jsonRes); tg.sendData(jsonRes); nextRemoveDiv(7);}   else { 	 blinkHiddenText("#pText")};
}


	
/*function main() {
	
const buttons=document.getElementsByName('btn_name');

for(let i=0; i<buttons.length; i++){

buttons[i].addEventListener('click',
    function clickButton(event){
        event.preventDefault();

 



if(i==0) valSex('radio-1', 'radio-2');
if(i==1) valAim('checkbox_1', 'checkbox_2', 'checkbox_3', 'checkbox_4');
if(i==2) valAim('checkbox_5', 'checkbox_6', 'checkbox_7', 'checkbox_8');
if(i==3) valAim('checkbox_9', 'checkbox_10', 'checkbox_11', 'checkbox_12');
if(i==4) valDate();
if(i==5) { var check = valName(); if (check =="") console.log("ПУСТО В ПОЛЕ ВВОДА");} else { console.log("Всё нормуль check = ", check ); };
if(i==6) { var check = valText(); if (check =="") console.log("Attention");};


nextRemoveDiv(i);


 
  
	
//	if (secondNameid != "" && firstNameid != "" && ageId != "" ) {
//	tg.sendData([secondNameid,firstNameid,ageId].join('¿'));
//	};

});

}





 //}



//document.addEventListener('DOMContentLoaded', main);
*/