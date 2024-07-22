import { createChatBotMessage } from 'react-chatbot-kit';
import CustomMessage from './CustomMessage.jsx';
import NumberContext from './NumberContext.jsx';
import FinalResponse from './FinalResponse.jsx';
import Estudiante from './Estudiante.jsx';
import Lista from './Lista.js';
import Categoria from './Categoria.jsx';
import { act } from 'react';

const botName = 'EduBot';

//Configuraciones iniciales
const config = {
  botName: botName,
  initialMessages: [createChatBotMessage(`Hola! Soy ${botName}, cual es tu nombre?`)], //Mensaje que se muestra al principio
  customComponents: { //Cosas del CCS
    header: () => (
      <div style={{ backgroundColor: '#efefef', padding: '10px', borderRadius: '3px',color: '#000000', fontFamily: 'sans-serif' }}>
        EduBot - Chatbot
      </div>
    ),
  },
  customStyles: { //Cosas del CCS
   
    botMessageBox: {
      backgroundColor: '#061161',
    },
    chatButton: {
      backgroundColor: '#134e5e',
    },

  },
  state: { //Variables - Guarda el estado de lo que esté haciendo el usuario
    Lista,
    pref: "", 
    num: 1,
    carnet: "",

  },
  widgets: [ //Crea los botones que va seleccionando el usuario
    {
      widgetName: 'CustomMessage',
      widgetFunc: (props) => <CustomMessage {...props} />,
      mapStateToProps: ["messages", "num"], //Son las variables de estado a las que puede acceder (Las que vemos en state)
    },
    {
      widgetName: 'NumberContext',
      widgetFunc: (props) => <NumberContext {...props} />,
      mapStateToProps: ["messages", "pref"],
    },
    {
      widgetName: 'FinalResponse',
      widgetFunc: (props) => <FinalResponse {...props} />,
      mapStateToProps: ["messages", "pref"],
    },
    {
      widgetName: 'Estudiante',
      widgetFunc: (props) => <Estudiante {...props} />,
      mapStateToProps: ["messages", "pref", "num", "carnet"],
    },
    {
      widgetName: 'Categoria',
      widgetFunc: (props) => <Categoria {...props} />,
      mapStateToProps: ["messages", "pref"],
    },
  ]
};

export default config;
