 const fs = require('fs');

let todoList = [];

const guardarDB = () => {
    let data = JSON.stringify(todoList);

    fs.writeFile('db/data.json',data, (err) =>{
        if( err ) throw new Error('No se ha podido grabar', err);
        console.log('El fichero se ha guardado correctamente');
    });
}


const cargarDB = () =>{
    try {
        todoList = require('../db/data.json');
    } catch (error) {
        todoList = [];
    }
}



const crear = (descripcion) => {

    cargarDB();

    let todo = {
        descripcion,
        completado: false
    };

    todoList.push(todo);
    guardarDB();

    return todo;
}

const getListado = () =>{
    cargarDB();
    return todoList;
}

const actualizar = (descripcion, completado = true) =>{
    
    cargarDB();

    let index = todoList.findIndex(tarea => tarea.descripcion === descripcion);
    if(index >= 0){
        todoList[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
}

const borrar = (descripcion) =>{
    cargarDB();
    let nuevoListado = todoList.filter(tarea => tarea.descripcion !== descripcion);
    if(nuevoListado.length === todoList.length){
        return false;
    }else{
        todoList = nuevoListado;
        guardarDB();
        return true;
    }
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}