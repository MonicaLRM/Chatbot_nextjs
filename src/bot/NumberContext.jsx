import React, { useState } from 'react';
import styles from '../app/page.module.css';
let bandera = 1;

export default function NumberContext(props) {
  
  const est = props.pref; // Asegúrate de que el prop 'pref' se está pasando correctamente

  // Estado para gestionar la visibilidad de los botones
  const [buttonsState, setButtonsState] = useState({
    btn1: true,
    btn2: true,
    btn3: true,
    btn4: true,
    btn5: true,
    btn6: true,
  }
);

  // Maneja el clic en los botones
  const handlePreference = (value,opcion) => {
    // Actualiza el estado para reflejar el clic y bloquear botones anteriores
    setButtonsState((prev) => {
      const updatedState = { ...prev };

      // Bloquea todos los botones anteriores
      if (value) {
        updatedState.btn1 = false;
        updatedState.btn2 = false;
        updatedState.btn3 = false;
        updatedState.btn4 = false;
        updatedState.btn5 = false;
        updatedState.btn6 = false;  

      } 
      
      return updatedState;
    });

    if(est == "Estudiante" && value == "6"){
      props.actions.userMsg(opcion); 
      props.actions.Estudiante(value);
       
        bandera +1;

    }
    else {
      props.actions.userMsg(opcion);
      props.actions.defaultop(value);
      bandera +1;}
        
    
  };

  // Define el texto de los botones basado en el valor de 'est'
  const buttonLabels = {
    Estudiante: ['Información Académica y Administrativa', 
      'Recursos y Servicios del Campus', 
      'Apoyo y Bienestar Estudiantil',
      'Orientación sobre Carrera y Desarrollo Profesional',
      'Vida Estudiantil y Eventos Sociales',
      'Informacion de Estudiante'],
    Invitado: ['Información Académica y Administrativa', 
      'Recursos y Servicios del Campus', 
      'Apoyo y Bienestar Estudiantil',
      'Orientación sobre Carrera y Desarrollo Profesional',
      'Vida Estudiantil y Eventos Sociales'],
    
  };

  const labels = buttonLabels[est] || ['Default bt 1', 'Default bt 2', 'Default bt 3', 'Default bt 4'];

  return (
    <div>
      {buttonsState.btn1 && (
        <button className={styles.botonNormal} onClick={() => handlePreference("1",'Información Académica y Administrativa')}>{labels[0]}</button>
      )}
      {buttonsState.btn2 && (
        <button className={styles.botonNormal} onClick={() => handlePreference("2",'Recursos y Servicios del Campus')}>{labels[1]}</button>
      )}
      {buttonsState.btn3 && (
        <button className={styles.botonNormal} onClick={() => handlePreference("3",'Apoyo y Bienestar Estudiantil')}>{labels[2]}</button>
      )}
      {buttonsState.btn4 && (
        <button className={styles.botonNormal} onClick={() => handlePreference("4",'Orientación sobre Carrera y Desarrollo Profesional')}>{labels[3]}</button>
      )}
      {buttonsState.btn5 && (
        <button className={styles.botonNormal} onClick={() => handlePreference("5",'Vida Estudiantil y Eventos Sociales')}>{labels[4]}</button>
      )}
      {buttonsState.btn6 && (
        <button className={props.pref == "Estudiante" ? styles.botonNormal:''} onClick={() => handlePreference("6",'Informacion de estudiante')}>{labels[5]}</button>
      )}
    </div>
  );
}
