import React from 'react';
let i = 0;

//Verifica que el usuario mande un mensaje
//Cuando el usuario presiona enter, se viene para acá

const MessageParser = ({ children, actions }) => {
  
  const parse = (message) => {
  const num = children.props.state.num;
  const actual = children.props.state.actual;
  const regex = /^[A-Za-z]{2}\d{6}$/;
  const regex2 = /^\D*$/;

    if(num == 1)
    {
      if(regex2.test(message)==true) //Evalua el mensaje
      {
        actions.afterS(message); //Mnada la constetacion del chatbot
      }
      else if(regex2.test(message)==false)
      {
        actions.error(message); //Si no es valido, manda error
      }
    }
   if(num == 2)
    {
      children.props.state.carnet = message;
      if(regex.test(message)==true)
      {
        actions.Estu2(children.props.state.carnet);
      }
      else if(regex.test(message)==false)
      {
       
        actions.error(message);
      }
      
    }
    if(num == 3){
      actions.error(message);
    }
    
    /*if (message.includes('Estudiante') && num==2) {
      actions.General();
    }

    if (message.includes('Invitado')&& num==2) {
      actions.General();
    }*/


  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;

