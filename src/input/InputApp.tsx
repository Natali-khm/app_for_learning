import { useState } from "react";
import InputPlussButton from "./InputPlussButton";

type MessageType = {
    message: string
}

const InputApp = () => {
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
      <InputPlussButton onChangeInputHandler={onChangeInputHandler} 
                        addMessageButtonHandler={addMessageButtonHandler} 
                        currentInputValue={currentInputValue}/>
      {message.map((m, i) => {
        return <div key={i}>{m.message}</div>;
      })}
    </>
  );
}


 export default InputApp;