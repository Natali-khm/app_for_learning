import React from "react"

type InputPropsType = {
    callBack: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string
}

const Input: React.FC<InputPropsType> = (props) => { 
    return (
        <input type="text" 
        onChange = {(e) => {props.callBack(e)}}
        value = {props.value}/>
) 
}

export default Input;