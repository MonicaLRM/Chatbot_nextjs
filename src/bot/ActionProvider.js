import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';

//Esto crea los mensajes del chatbot

const ActionProvider = ({ createChatBotMessage, setState, children }) => { //Se manda a llamar cuandos se ingresa el mensaje
  const afterS = (message) => {
    const botMessage = createChatBotMessage('Como te clasificas? \n\n Selecciona una opción:', {
      widget: 'CustomMessage', //Botones de la pregunta
    });
        // Actualiza el estado de 'pref' en el chatbot
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
          num: 3, //Cambia la variable num

        }));
  };

  const General = (preference, opcion) => { //Nueva pregunta

    if(opcion == "Estudiante"){
      const botMessage = createChatBotMessage(`Estas son las opciones para ${opcion}, \n Selecciona una:`, {
        widget: 'NumberContext',
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
        pref: preference,
       
      }));
    }
    else if(opcion == "Invitado"){
      const botMessage = createChatBotMessage(`Estas son las opciones para ${opcion}, \n Selecciona una:`, {
        widget: 'NumberContext',
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
        pref: preference,
      }));
    }

    
    // Actualiza el estado de 'pref' en el chatbot
    
  };

  const opciones = (preference,opcion,pref) => {
    
    if(pref == "1" && opcion == "opcion 1")
    {
      const botMessage = createChatBotMessage(`El calendario académico para este semestre incluye fechas importantes como inicio y fin de clases, vacaciones y exámenes. Puedes encontrarlo en el sitio web de la universidad.`, {
        widget: 'FinalResponse',
      });
      updateChatbotState(botMessage, "op1");
    }
    if(pref == "1" && opcion == "opcion 2")
      {
        const botMessage = createChatBotMessage(`El horario de clases puede variar en base a las materias que has inscrito en el ciclo. Puedes encontrar tu horario de clases en el portal del estudiante de la universidad, bajo la sección "Mi Horario"`, {
          widget: 'FinalResponse',
        });
        updateChatbotState(botMessage, "op1");
      }
    if(pref == "1" && opcion == "opcion 2")
        {
          const botMessage = createChatBotMessage(`El horario de clases puede variar en base a las materias que has inscrito en el ciclo. Puedes encontrar tu horario de clases en el portal del estudiante de la universidad, bajo la sección "Mi Horario"`, {
            widget: 'FinalResponse',
          });
          updateChatbotState(botMessage, "op1");
        }
    if(pref == "1" && opcion == "opcion 3")
         {
            const botMessage = createChatBotMessage(`Los períodos de inscripción para cursos se anuncian al inicio de cada semestre. Te recomiendo que consultes el portal del estudiante para que puedas ver más detalles.`, {
              widget: 'FinalResponse',
            });
            updateChatbotState(botMessage, "op1");
          }
          if(pref == "2" && opcion == "opcion 1")
            {
              const botMessage = createChatBotMessage(`La biblioteca está ubicada a la par de la pinacoteca y está abierta de 8 AM a 8 PM de lunes a viernes. Los sábados abre de 9 AM a 5 PM.`, {
                widget: 'FinalResponse',
              });
              updateChatbotState(botMessage, "op1");
            }
            if(pref == "2" && opcion == "opcion 2")
              {
                const botMessage = createChatBotMessage(`Puedes contactar al departamento de servicios estudiantiles enviando un correo a servicios@universidad.edu o visitando su oficina en el edificio administrativo.`, {
                  widget: 'FinalResponse',
                });
                updateChatbotState(botMessage, "op1");
              }
              if(pref == "2" && opcion == "opcion 3")
                {
                  const botMessage = createChatBotMessage(`Esta semana hay un taller de desarrollo profesional el día miércoles y una feria de clubes el viernes. ¡No te lo pierdas!`, {
                    widget: 'FinalResponse',
                  });
                  updateChatbotState(botMessage, "op1");
                }
                if(pref == "3" && opcion == "opcion 1")
                  {
                    const botMessage = createChatBotMessage(`Si estás experimentando estrés o problemas emocionales, puedes acudir al centro de bienestar estudiantil, ubicado en el edificio de servicios estudiantiles.`, {
                      widget: 'FinalResponse',
                    });
                   updateChatbotState(botMessage, "op1");
                  }
               if(pref == "3" && opcion == "opcion 2")
                   {
                      const botMessage = createChatBotMessage(`La universidad ofrece una variedad de recursos para estudiantes con discapacidades, incluyendo apoyo académico y adaptaciones en el aula. Contacta al departamento de servicios estudiantiles para más información.`, {
                        widget: 'FinalResponse',
                      });
                     updateChatbotState(botMessage, "op1");
                    }  
                    if(pref == "3" && opcion == "opcion 3")
                      {
                         const botMessage = createChatBotMessage(`Los servicios de tutoría están disponibles para ayudar a mejorar tu rendimiento académico. Puedes inscribirte a través del portal del estudiante.`, {
                           widget: 'FinalResponse',
                         });
                        updateChatbotState(botMessage, "op1");
                       } 
                       if(pref == "4" && opcion == "opcion 1")
                        {
                           const botMessage = createChatBotMessage(`Puedes encontrar pasantías relevantes para tu carrera a través del portal de empleos de la universidad o contactando a la oficina de desarrollo profesional.`, {
                             widget: 'FinalResponse',
                           });
                          updateChatbotState(botMessage, "op1");
                         } 
                         if(pref == "4" && opcion == "opcion 2")
                          {
                             const botMessage = createChatBotMessage(`La universidad ofrece recursos y talleres para ayudarte a escribir tu currículum vitae. Consulta el portal del estudiante para más detalles.`, {
                               widget: 'FinalResponse',
                             });
                            updateChatbotState(botMessage, "op1");
                           }  
                           if(pref == "4" && opcion == "opcion 3")
                            {
                               const botMessage = createChatBotMessage(`Hay talleres disponibles regularmente para prepararte para entrevistas de trabajo. Inscríbete a través del portal del estudiante.`, {
                                 widget: 'FinalResponse',
                               });
                              updateChatbotState(botMessage, "op1");
                             }  
                             if(pref == "5" && opcion == "opcion 1")
                              {
                                 const botMessage = createChatBotMessage(`En el campus hay una variedad de clubes y actividades extracurriculares, desde deportes hasta arte y tecnología. Consulta el portal de actividades estudiantiles para más información.`, {
                                   widget: 'FinalResponse',
                                 });
                                updateChatbotState(botMessage, "op1");
                               }  
                               if(pref == "5" && opcion == "opcion 2")
                                {
                                   const botMessage = createChatBotMessage(`Este fin de semana hay una fiesta de bienvenida el sábado y una caminata ecológica el domingo. ¡Únete!`, {
                                     widget: 'FinalResponse',
                                   });
                                  updateChatbotState(botMessage, "op1");
                                 }  
                                 if(pref == "5" && opcion == "opcion 3")
                                  {
                                     const botMessage = createChatBotMessage(`Las opciones de alimentación en el campus incluyen cafeterías, comedores y varios restaurantes. Consulta el mapa del campus para ubicaciones específicas.`, {
                                       widget: 'FinalResponse',
                                     });
                                    updateChatbotState(botMessage, "op1");
                                   }  
   
  };

  const defaultop = (preference) => {
    const botMessage = createChatBotMessage(`Que deseas saber?  \n\n Selecciona una opción:`, {
      widget: 'Categoria',
    });

    
    // Actualiza el estado de 'pref' en el chatbot
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
      pref: preference,
    }));
  };

  const despedida = () => {
    const botMessage = createChatBotMessage('Fue un gusto resolver tus dudas, ¡Que tengas un buen día!', {
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
      num: 4,
    }));
  };

  const Estudiante = () => {
    const botMessage = createChatBotMessage('Digita tu número de carnet', {
      //widget: 'Estudiante',
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
      num: 2,
    }));
  };

   const Estu2 = (carnet) => { //Se manda a llamar luego de ingresar el carnet
    const botMessage = createChatBotMessage('carnet Ingresado...', {
      widget: 'Estudiante',

    });
    // Actualiza el estado de 'pref' en el chatbot
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
      carnet: carnet,
    }));
  };


  const infoestu = (carnet,nombre,sexo,carrera,pensum) => {
    const botMessage = createChatBotMessage(`Su informacion es la siguiente \n\n Carnet:${carnet} \nNombre:${nombre}\n\n Carrera:${carrera}\n Pensum:${pensum}`, {
      widget: 'FinalResponse',

    });
    // Actualiza el estado de 'pref' en el chatbot
    updateChatbotState(botMessage, "fincarnet");
  };


  const error = (message) => {
    const botMessage = createChatBotMessage(`${message} no es un valor aceptado`, {
      //widget: 'FinalResponse',

    });
    // Actualiza el estado de 'pref' en el chatbot
    updateChatbotState(botMessage, "fincarnet");
  };

  const userMsg = (opcion) => {
        const botMessage = createClientMessage(`${opcion}`);
    // Actualiza el estado de 'pref' en el chatbot
      updateChatbotState(botMessage, "fincarnet");
  
  };




  const updateChatbotState = (message, checker = "") => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      checker,
    }));
  };

  return ( //Muestras las funciones disponibles
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            afterS,
            General,
            opciones,
            defaultop,
            despedida,
            Estudiante,
            Estu2,
            infoestu,
            error,
            userMsg,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
