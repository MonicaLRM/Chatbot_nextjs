import React, { useState } from 'react';
import styles from '../app/page.module.css';

let valor = 0;

export default function CustomMessage(props) {
  
 
  // Estado para gestionar la visibilidad de los botones

  const [buttonsState, setButtonsState] = useState({
    btn1: true,
    btn2: true,
 
  });

  // Maneja el clic en los botones
  const handlePreference = (value, opcion) => {
    // Actualiza el estado para reflejar el clic y bloquear botones anteriores
    setButtonsState((prev) => {
      const updatedState = { ...prev };

      // Bloquea todos los botones anteriores
      if (value) {
       
        updatedState.btn1 = false;
        updatedState.btn2 = false;
   
      } 
      
      return updatedState;
    });

      props.actions.userMsg(opcion);
      props.actions.General(value, opcion);
      valor = value;
  
    
  };

  
  return (
    <div className={styles.buttonContainer}>
      {buttonsState.btn1 && (
        <button className={styles.botonNormal} onClick={() => handlePreference("Estudiante","Estudiante") }>Estudiante</button>
      )}
      {buttonsState.btn2 && (
        <button className={styles.botonNormal} onClick={() => handlePreference("Invitado","Invitado")}>Invitado</button>
      )}
      
    </div>
  );
}
