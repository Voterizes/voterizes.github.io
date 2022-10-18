
let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFF00";
tg.MainButton.color = "#FF4500";

let item = '0';


function capitalizeFirstLetter(strng) {
	let newStr = strng[0].toUpperCase() + strng.slice(1);
	console.log("newStr =", newStr);
    return newStr;
}

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
        if (on.checked) {  console.log(on.value);}
		if (tw.checked) {  console.log(tw.value);}

		if (on.checked != true && tw.checked != true) { console.log("ЧЁКНУТЫХ У НАС НЕТ"); return false;}        
    }

function valAim(one, two, three, four) {
        var on = document.getElementById(one)
		var tw = document.getElementById(two)
		var th = document.getElementById(three)
		var fo = document.getElementById(four)
	
        if (on.checked) {  console.log(on.value);}
		if (tw.checked) {  console.log(tw.value);}
		if (th.checked) {  console.log(th.value);}
		if (fo.checked) {  console.log(fo.value);}
		
		if (on.checked != true && tw.checked != true && th.checked != true && fo.checked != true) { console.log("ЧЁКНУТЫХ У НАС НЕТ"); return false;}
        
    }
	
function valGrowth() {
        if (document.getElementById('checkbox_5').checked) {  console.log("До 170");}
		if (document.getElementById('checkbox_6').checked) {  console.log("от 170 до 180");}
		if (document.getElementById('checkbox_7').checked) {  console.log("от 180 до 190");}
		if (document.getElementById('checkbox_8').checked) {  console.log("Выше 190");}
        
    }

function valWeight() {
        if (document.getElementById('checkbox_9').checked) {  console.log("До 20 лет");}
		if (document.getElementById('checkbox_10').checked) {  console.log("от 20 до 30");}
		if (document.getElementById('checkbox_11').checked) {  console.log("от 30 до 40");}
		if (document.getElementById('checkbox_12').checked) {  console.log("Старше 40");}
        
    }	
	

function valDate() {
	var selectYear = document.getElementById('selectYear');
	console.log(selectYear.value);
	var selectDate = document.getElementById('selectDate');
	console.log(selectDate.value);
	var selectMonth = document.getElementById('selectMonth');
	console.log(selectMonth.value);
	
    return   selectYear.value;
    }	
	

//document.addEventListener('DOMContentLoaded', function() { valName(); valName_2(); });

function valName() {
	var valNam = document.querySelector('#idfirstName').value;
	console.log(valNam);
	return valNam;
}

        
function valText() {
	var valTex = document.querySelector('#idContent').value;
	console.log(valTex);
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
	var checkBoxCheck = valAim('checkbox_5', 'checkbox_6', 'checkbox_7', 'checkbox_8');
	if(checkBoxCheck !=false) nextRemoveDiv(3);   else { blinkHiddenText("#pGrowth")};
}

document.querySelector("#btn_4").onclick = () => {
	event.preventDefault();
	var checkBoxCheck = valAim('checkbox_9', 'checkbox_10', 'checkbox_11', 'checkbox_12');
	if(checkBoxCheck !=false) nextRemoveDiv(4);   else { blinkHiddenText("#pAge")};
}

document.querySelector("#btn_5").onclick = () => {
	event.preventDefault();
	var textDate = valDate();
	console.log(textDate);
	if(textDate !="1942") nextRemoveDiv(5);   else { blinkHiddenText("#pDate")};
}

document.querySelector("#btn_6").onclick = () => {
	event.preventDefault();
	var textInput = valName();
	//var r = /\d+/;
	var r = /[^а-яА-ЯёЁ\-]/g;
	
	
	if (textInput.match(r) ) {  textInput =""; } // если содержит цифры то удаляем
	if(textInput !="") { textInput = capitalizeFirstLetter(textInput); nextRemoveDiv(6); }  else { blinkHiddenText("#pName")};
}

document.querySelector("#btn_7").onclick = () => {
	event.preventDefault();
	var textInput = valText();
	var r = /[a-z]+/i;
	var d = /\d+/;
	
	if (textInput.match(r) || textInput.match(d) ) {  textInput =""; } // если содержит цифры то удаляем
	if(textInput !="") nextRemoveDiv(7);   else { blinkHiddenText("#pText")};
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