let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFF00";
tg.MainButton.color = "#FF4500";

let item = '0';

// начало слайдера

const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider .slider-line');
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider-next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

}

// конец слайдера



// ЗАГРУЗКА ФОТОГРАФИИ

let uploadInput = document.querySelector('.js-upload-input'),
    uploadBtn = document.querySelector('.js-upload-btn'),
    uploadImage = document.querySelector('.js-upload-image');


uploadBtn.onclick = function () {
    uploadInput.click();
}


uploadInput.onchange = function () {
    getImageData();
}


function getImageData() {
    let files = uploadInput.files[0];

    if (files) {
        let fileReader = new FileReader();

        fileReader.readAsDataURL(files);

        fileReader.onload = function () {
            uploadImage.classList.add('active');
            uploadImage.src = this.result;
			tg.sendData(uploadImage.src);
        }
    }
}


// КОНЕЦ БЛОКА ЗАГРУЗКИ ФОТОГРАФИЙ




document.querySelector("#idButton").onclick = () => {
	tg.MainButton.show();
	
}




Telegram.WebApp.onEvent("mainButtonClicked", function(){
	 
	let media = [ ];
	
	let ageId = document.querySelector('#idAge').value;
	let firstNameid = document.querySelector('#idfirstName').value;
	let secondNameid = document.querySelector('#idsecondName').value;
	
	
	// media = document.getElementById("idAge");
	// media = document.getElementById("idfirstName");
	// media = document.getElementById("idsecondName");
	
	media = [secondNameid, firstNameid, ageId];
    tg.sendData(media); 
});


let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText =`${tg.initDataUnsafe.first_name}
	${tg.initDataUnsafe.last_name}`;
	
usercard.appendChild(p);
