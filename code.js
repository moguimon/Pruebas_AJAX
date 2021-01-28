// definimos las variables que vamos a usar

var estados=["No inicializada","Cargando","Cargado","Interactivo","Completada"] // Estados de la petición
var tiempo_inic=0;

window.onload= function(){
	var recurso=document.getElementById("recurso");
	recurso.value=location.href;
	document.getElementById("enviar").onclick = carga_contenido;// Cargar la URL al hacer click al botón enviar
}

// Cargo los datos datos en cada div, modificando el DOM
function carga_contenido() {
	//limpio los contenedores
	document.getElementById("contenidos").innerHTML="";
	document.getElementById("cabeceras").innerHTML="";
	//document.getElementById("estados").innerHTML="";
	//document.getElementById("codigo").innerHTML="";
	
	if (window.XMLHttpRequest){
		var solicitud = new XMLHttpRequest();// creo la var de la solicitud
	}
	solicitud.onreadystatechange= mostrar_contenido;// onreadystatement es una func que se ejecuta cdo cambia el estado
	tiempo_inic= new Date();
	var recurso=document.getElementById("recurso").value;
	solicitud.open("GET",recurso,true); // se realiza la petición
	solicitud.send(null);
}

function mostrar_contenido(){
	var tiempo_final= new Date();
	var dif_tiempo= tiempo_final-tiempo_inic;
	var estados=getElementById("estados");
	estados.innerHTML+="["+dif_tiempo+" mseg.]"+states[solicitud.readyState]+ "</br>";
	if (solicitud.readyState == 4 && solicitud.status == 200) {
		var contenidos=document.getElementById("contenidos");
		contenidos.innerHTML=solicitud.responseText;
	}
	cargar_cabeceras();
	carga_contenido();
 }

function cargar_cabeceras(){
	var cabeceras=document.getElementById("cabeceras");
	cabeceras.innerHTML= solicitud.getAllResponseHeaders();
};

function mostrar_secundario(){
	var codigo=document.getElementById("codigo");
	codigo.innerHTML=solicitud.status+"</br>"+solicitud.statusText;

}