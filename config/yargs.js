const descripcion = {
	demand: true,
					alias: 'd',
					desc: 'Descripcion de tarea'
}
const completado = {
	default:true,
					alias:'c',					
					desc: 'Marca completado'
}
const argv = require('yargs')
			.command('crear','Crear en console',{descripcion})
			.command('actualizar','Actualizado la nueva tarea',{descripcion,completado})	
			.command('borrar','Borrar la nueva tarea',{descripcion})			
			.help()
			.argv;

module.exports={
	argv
}