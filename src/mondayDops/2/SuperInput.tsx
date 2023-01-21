import React, { ChangeEvent } from 'react'

type PropsType = {
    callBack: (newValue: string)=>void
    newTitle: string
}

const SuperInput: React.FC<PropsType> = (props) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callBack(e.currentTarget.value)
    }
  return (
    <input type="text" onChange={onChangeHandler} value={props.newTitle}/>
  )
}

export default SuperInput