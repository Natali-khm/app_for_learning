import React from 'react'

type propsType = {
    name: string
    callBack: ()=>void
}

const SuperButton: React.FC<propsType> = (props) => {

    const onClickHandler = () => { 
        props.callBack()
     }
     
  return (
    <button onClick={onClickHandler}>{props.name}</button>
  )
}

export default SuperButton;