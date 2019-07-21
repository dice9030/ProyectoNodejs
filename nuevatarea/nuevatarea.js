const fs = require('fs')


let listadoNuevaTarea = [];

const guardarDB = ()=>{
	let data = JSON.stringify(listadoNuevaTarea)
	
	fs.writeFile(`db/data.json`,data, (err) =>{
			if(err) throw Error('No se pudo grabar',err);						
		})		
}


const cargarDB = () =>{

	try{

		listadoNuevaTarea = require('../db/data.json');

	}catch(error){
		listadoNuevaTarea = [];
	}
	
}

const crear = (descripcion) =>{
	cargarDB();

	let a = {
		descripcion,
		completado:false
	};
	listadoNuevaTarea.push(a);
	guardarDB();


	return a
}


const getListado = () => {
	cargarDB();
	return	listadoNuevaTarea
}

const actualizar = (descripcion,completado=true) =>{
	cargarDB();
	let index = listadoNuevaTarea.findIndex(tarea => tarea.descripcion === descripcion)

	if (index){
		listadoNuevaTarea[index].completado = completado;
		guardarDB();
		return true
	}else{
		return false
	}

}

const borrar = (descripcion) =>{
	cargarDB();
	let NuevoListado = listadoNuevaTarea.filter(tarea => {return tarea.descripcion !== descripcion })

	console.log(NuevoListado);
	if(listadoNuevaTarea.length === NuevoListado.length){
		return false
	}else{
		listadoNuevaTarea = NuevoListado;
		guardarDB();
		return true;
	}
}


module.exports={
	crear,getListado,actualizar,borrar
}