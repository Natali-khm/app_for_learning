import React from "react"

type InputPropsType = {
    currentInputValue: string
    onChangeInputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
    addMessageButtonHandler: () => void
}

const InputPlussButton: React.FC <InputPropsType> = (props) => { 
    return (
        <div>
            <input onChange={(e)=>{props.onChangeInputHandler(e)}} 
                   value = {props.currentInputValue} 
                   type="text" />
            <button onClick={props.addMessageButtonHandler}>+</button>
        </div>
    )
 }

 export default InputPlussButton;