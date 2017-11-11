function lista(){

	var cont = document.getElementById('container_tareas');
	var btn = document.getElementById('boton_principal');
	cont.removeChild(btn); //para que mi boton se quite al hacer click//

	//crear contenedor, con input, boton guardar y boton eliminar//
	var newDiv = document.createElement('div');
	newDiv.classList.add('class', 'nuevodiv');

	var input = document.createElement('input');//crear un input//
	input.setAttribute('id', 'valor'); 
	input.setAttribute('placeholder', 'Añadir una lista...');
	//crear boton de guardar//
	var btn = document.createElement('button');
	btn.classList.add('class', 'save');//dar clase//
	btn.setAttribute('type', 'button');//dar atributo en caso de...//
	var txtbtn = document.createTextNode('Guardar');//crear el texto al boton//
	btn.appendChild(txtbtn); //apendar texto a boton//

	var icon = document.createElement('i'); //crear el icono//
	icon.classList.add('fa', 'fa-times', 'times');//añadir clase//

	//apendar//
	newDiv.appendChild(input);
	newDiv.appendChild(btn);
	newDiv.appendChild(icon);
	cont.appendChild(newDiv);

	//hacer funcionar el boton para eliminar//
	icon.addEventListener('click', function(){
	cont.removeChild(newDiv);

})


	//crear evento al boton guardar//

	btn.addEventListener("click", function() {
	var add = document.createElement('div'); //cuando boton sea presionado crear contenedor//
	add.setAttribute('id', 'add');

	//title//
	var title = document.createElement('span');//se crea el titulo de la lista//
	title.classList.add('class', 'titulo');//clase al titulo//
	var newInput = document.getElementById('valor').value;//valor de lo que ingresara el usuario//
	document.getElementById('valor').value="";
	var texto = document.createTextNode(newInput);//crear un nodo de texto//
	title.appendChild(texto);//apendar//

	//crear el enlace añadir tarjeta//
	var element_a = document.createElement("a");
	element_a.setAttribute('href', '#');
	element_a.classList.add('class', 'elementoA');
	var textCard = document.createTextNode('Añadir una tarjeta...');
	
	//apendar//
	element_a.appendChild(textCard);
	add.appendChild(title);
	add.appendChild(element_a);
	cont.appendChild(add);
	cont.insertBefore(add, cont.childNodes[0]);//para que el primer div quede despues del nuevo que 
	//se creó (el primer elemento div en el documento document.body.childNodes[0];)//.
	//Luego crear un evento al enlace que se creó anteriormente//
	element_a.addEventListener('click', function() {
	element_a.style.display = 'none';//display:none, oculta todo el elemento...oculta el link//
	
	//Crear el contenedor de textarea//

	var divtextarea = document.createElement('div');
	divtextarea.setAttribute('class', 'textareaa');

	var titleArea = document.createElement('h6'); //titulo del textarea//
	titleArea.setAttribute('class','ta');
	var nodo = document.createTextNode(newInput);
	titleArea.appendChild(nodo);
	titleArea.style.display = 'none';

	var textarea = document.createElement('textarea');
	textarea.classList.add('class', 'tear');
	textarea.setAttribute('cols', '30');
	textarea.setAttribute('rows', '2');
	
	// crear BOTON AÑADIR//
	var anadir = document.createElement('button');
	anadir.setAttribute('class', 'addButton');
	anadir.setAttribute('type', 'button');
	var textAnadir = document.createTextNode('Añadir');
	anadir.appendChild(textAnadir);

	//apendar//
	divtextarea.appendChild(titleArea);
	divtextarea.appendChild(textarea);
	divtextarea.appendChild(anadir);
	
	add.appendChild(divtextarea);
	add.insertBefore(divtextarea, add.childNodes[1]);

//EVENTO DEL BOTON AÑADIR//

	anadir.addEventListener('click', function(){
	var box= document.getElementById('add');

	// valor del textarea//
	var valor = document.getElementsByClassName('tear')[0].value;
	document.getElementsByClassName('tear')[0].value = "";
	var tx = document.createTextNode(valor);
				
	//div aparte para almacenar valor del textarea//
	var apart = document.createElement('div');
	apart.classList.add('class', 'other');
	var aparte = document.createElement('p');
	aparte.appendChild(tx);				

	//apendar//
	box.appendChild(apart);
	apart.appendChild(aparte);
	

	
	})
})

	
	
})		
}


