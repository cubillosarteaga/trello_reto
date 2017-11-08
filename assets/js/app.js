function lista(){

var cont = document.getElementById('container_tareas');
var btn = document.getElementById('boton_principal');
cont.removeChild(btn); //para que mi boton se quite al hacer click//

var newCont = document.createElement('div');
var input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Añadir una lista...');
input.classList.add('class', 'input_titulo');
input.value;

//boton para guardar//

var buton = document.createElement('button')
var texto_boton= document.createTextNode('Guardar');
buton.setAttribute('type', 'button');
buton.classList.add('class', 'guardar_boton');

//agregar hijos//
tareas.appendChild(input);
tareas.appendChild(buton);
buton.appendChild(texto_boton);


buton.addEventListener('click', function(){
var title_input = document.getElementsByClassName('input_titulo')[0].value;
document.getElementsByClassName('input_titulo')[0].value = "";
var container1 = document.createElement("div");//debo crear a partir del click de este boton, un div que tenga un span, //
container1.classList.add('class','container1')
var title = document.createElement("span");//que sera el titulo (su valor es lo ingresado en el input) + boton (que mostrara el //
title.classList.add('class', 'titulospan');
    
//tareas.removeChild(buton);//


title.textContent=title_input;
    
container1.appendChild(title);
	
	
//boton añadir//
var but = document.createElement("button");

container1.appendChild(but);
but.classList.add('class', 'button'); //clase al boton//
but.textContent="Añadir";
tareas.appendChild(container1);

//link para añadir una tarjeta//
var linkAnadir = document.createElement('a')
linkAnadir.setAttribute('href', '#');
linkAnadir.classList.add('class', 'anadirtar');
var textAnadirTar = document.createTextNode('Añadir una tarjeta...');


//textarea + boton// 
var textarea = document.createElement('textarea');
textarea.classList.add('class', 'textarea');
but.addEventListener('click',function(){
var anadirLista = document.getElementsByClassName('textarea').value;
document.getElementsByClassName('textarea').value = "";
        
//container1.removeChild(textarea); //arroja un error. pero si quito esta linea me elimina otras cosas//
//creo un div con la info de textarea//
var cont_3 = document.createElement('div');//no se visualiza en el navegador :(//
cont_3.classList.add('class', 'contenedor3');
cont_3.appendChild(textarea);
cont_3.appendChild(textAnadirTar);

//asignar padres//
    
tareas.appendChild(cont_3);
cont_3.appendChild(anadirLista);
tarea.appendChild(anadirLista);
})



})
	
	


	/*console.log(tareas);*/

	/*var div_span = document.createElement('div');
	div_span.classList.add('class', 'contenedor_span');
	var span = document.createElement('span');
	var text_span = document.createTextNode('Nombre de Lista');
	div_span.appendChild(btn);
	span.appendChild(div_span);*/



	
	
	//siguiente div al hacer click) + div(que esta oculto) y que debe contener un textarea + boton + X//

}