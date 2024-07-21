import React, { useState, useEffect } from 'react';
import estudiantes from './Lista.js';
import styles from '../app/page.module.css';

export default function Estudiante(props) {
    let i=1;
  const [carnet, setCarnet] = useState(props.carnet);
  const [estudiante, setEstudiante] = useState(null);

 
    // Buscar el estudiante al cambiar el carnet
    try{
        useEffect(() => {
            const encontrado = estudiantes.find(est => est.carnet === carnet);
        setEstudiante(encontrado);
       
       
        if(encontrado == undefined && i==1)
        { 
            i++;
            props.actions.error("el carnet proporcionado");
        }
        else if (encontrado && i==1) {
            i++;
            props.actions.infoestu(encontrado.carnet, encontrado.nombre, encontrado.sexo, encontrado.carrera, encontrado.pensum);
        }
      
  }, [carnet]); // Dependencia: se ejecutará cuando carnet cambie
    }
    catch(e){ console.log("error");}
    

  useEffect(() => {
    if (estudiante) {
      console.log(estudiante.nombre);
    } 
  }, [estudiante]); // Dependencias: se ejecutará cuando estudiante, carnet o props.actions cambien

  return (
    <div>

    </div>
  );
}

