import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

type MessageType = {
    message: string
}

const InputUniversalApp = () => {
  let [message, setMessage] = useState<Array<MessageType>>([
    { message: "message1" },
    { message: "message2" },
    { message: "message3" },
  ]);

  let [currentInputValue, setCurrentInputValue] = useState <string>('')

  const addMessageButtonHandler = () => { 
    setMessage([{message: currentInputValue}, ...message ]);
    setCurrentInputValue('');
   }

  const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => { 
    setCurrentInputValue(e.currentTarget.value);
   }

  return (
    <>
      <Input callBack = {onChangeInputHandler} value = {currentInputValue}/>
      <Button name={'+'} callBack = {addMessageButtonHandler}/>

      {message.map((m, i) => {
        return <div key={i}>{m.message}</div>;
      })}
    </>
  );
}


 export default InputUniversalApp;