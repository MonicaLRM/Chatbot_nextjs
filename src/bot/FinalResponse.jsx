import React, { useState } from 'react';
import styles from '../app/page.module.css';

export default function FinalResponse(props) {
  
  // Estado para gestionar la visibilidad de los botones
  
  const [buttonsState, setButtonsState] = useState({
    btn1: true,
    btn2: true,
  });

  // Maneja el clic en los botones
  const handlePreference = (value,opcion) => {
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

    if(value === "7") 
    {
      props.actions.userMsg(opcion);
      props.actions.afterS();
    }
   
    else if(value === "8") 
    {
      props.actions.userMsg(opcion);
      props.actions.despedida();
    }
    
  };

  return (
    <div>
      <p className={styles.label}>¿Desea Hacer otra consulta?</p>
      {buttonsState.btn1 && (
        <button className={styles.botonNormal} onClick={() => handlePreference("7","Si")}>si</button>
      )}
      {buttonsState.btn2 && (
        <button className={styles.botonNormal} onClick={() => handlePreference("8","No")}>no</button>
      )}
  
    </div>
  );
}
