//const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;
const nuevatarea = require('./nuevatarea/nuevatarea');
const colors = require('colors')


let comando = argv._[0];


switch(comando){

	case 'crear':
		let tarea = nuevatarea.crear(argv.descripcion)
		console.log(tarea)
	break;
	case 'listar':

		let listado = nuevatarea.getListado();
	
		for (let tarea of listado) {
			console.log('=========Por Hacer================'.green)
			console.log(tarea.descripcion);
			console.log('Estado: ', tarea.completado);
			console.log('=========Fin================'.green)
		}
		
		console.log(listado);	
	break;
	case 'actualizar':
		let actualizado = nuevatarea.actualizar(argv.descripcion,argv.completado);
		console.log(actualizado)
	break;

	case 'borrar':
		let borrar = nuevatarea.borrar(argv.descripcion)
		console.log(borrar)
	break;
	default:
		console.log('vacio')

}