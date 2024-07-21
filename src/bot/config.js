import { createChatBotMessage } from 'react-chatbot-kit';
import CustomMessage from './CustomMessage.jsx';
import NumberContext from './NumberContext.jsx';
import FinalResponse from './FinalResponse.jsx';
import Estudiante from './Estudiante.jsx';
import Lista from './Lista.js';
import Categoria from './Categoria.jsx';
import { act } from 'react';

const botName = 'EduBot';

const config = {
  botName: botName,
  initialMessages: [createChatBotMessage(`Hola! Soy ${botName}, cual es tu nombre?`)],
  customComponents: {
    header: () => (
      <div style={{ backgroundColor: '#efefef', padding: '10px', borderRadius: '3px',color: '#000000', fontFamily: 'sans-serif' }}>
        EduBot - Chatbot
      </div>
    ),
  },
  customStyles: {
   
    botMessageBox: {
      backgroundColor: '#061161',
    },
    chatButton: {
      backgroundColor: '#134e5e',
    },

  },
  state: {
    Lista,
    pref: "",
    num: 1,
    carnet: "",

  },
  widgets: [
    {
      widgetName: 'CustomMessage',
      widgetFunc: (props) => <CustomMessage {...props} />,
      mapStateToProps: ["messages", "num"],
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
