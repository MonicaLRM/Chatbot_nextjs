import React, { useState } from 'react';
import styles from '../app/page.module.css';

export default function Categoria(props) {
  
  const est = props.pref; // Asegúrate de que el prop 'pref' se está pasando correctamente

  // Estado para gestionar la visibilidad de los botones
  const [buttonsState, setButtonsState] = useState({
    btn1: true,
    btn2: true,
    btn3: true,
    btn4: true,
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
        updatedState.btn3 = false;
        updatedState.btn4 = false;
      } 
      
      return updatedState;
    });

    props.actions.userMsg(opcion);
    props.actions.opciones(value,opcion,est);

  };

  // Define el texto de los botones basado en el valor de 'est'
  const buttonLabels = {
    1: ['Calendario Académico', 'Horario de Clases','Períodos de Inscripción'],
    2: ['Biblioteca y Horarios', 'Servicios Estudiantiles', 'Eventos en el Campus'],
    3: ['Ayuda con Estrés o Problemas Emocionales', 'Recursos para Estudiantes con Discapacidades', 'Servicios de Asesoramiento o Tutoría'],
    4: ['Pasantías o Prácticas Profesionales', 'Ayuda con el Currículum Vitae', 'Talleres para Entrevistas de Trabajo'],
    5: ['Clubes y Actividades Extracurriculares', 'Actividades para el Fin de Semana', 'Opciones de Alimentación en el Campus'],
  };

  const labels = buttonLabels[est] || ['Default bt 1', 'Default bt 2', 'Default bt 3'];

  return (
    <div>
      {buttonsState.btn1 && (
        <button className={styles.botonNormal} onClick={() => handlePreference("7","opcion 1")}>{labels[0]}</button>
      )}
      {buttonsState.btn2 && (
        <button className={styles.botonNormal} onClick={() => handlePreference("8","opcion 2")}>{labels[1]}</button>
      )}
      {buttonsState.btn3 && (
        <button className={styles.botonNormal} onClick={() => handlePreference("9","opcion 3")}>{labels[2]}</button>
      )}
     
    </div>
  );
}
