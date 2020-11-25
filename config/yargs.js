const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como pendiente o completado la tarea'
};

const argv = require('yargs')
    .command('crear','Crear una tarea por hacer', {
         descripcion 
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea',{
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea',{
        descripcion
    })
    .help()
    .argv;


    module.exports = {
        argv
    }