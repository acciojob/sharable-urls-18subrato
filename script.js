let inputName = document.querySelector('#name');
let inputYear = document.querySelector('#year');
let heading = document.querySelector('#url');
heading.innerText = ' https://localhost:8080/'
let btn = document.querySelector('#button');
btn.addEventListener("click",(e)=>{
	e.preventDefault();
	let name = inputName.value;
	let year = inputYear.value;

	if(!name && !year){
		return;
	}
	
	if(name && year){
		heading.innerText = `https://localhost:8080/?name=${name}&year=${2022}`
		return;
	} 
	
	if(!name){
		heading.innerText = `https://localhost:8080/?year=${year}`
		return;
	}

	if(!year){
		heading.innerText = `https://localhost:8080/?name=${name}`
		return;
	}

})
