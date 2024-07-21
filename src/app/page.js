"use client"
import './main.css'; 
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import styles  from './page.module.css';
import config from '../bot/config.js'
import MessageParser from '../bot/MessageParser.js'
import ActionProvider from '../bot/ActionProvider.js'

export default function Home() {
    return (
      <div className={styles.home}>
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    );
  };

