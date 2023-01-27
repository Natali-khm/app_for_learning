import React from 'react'
import { SuperButton } from './components/SuperButton'
import SuperTodoList from './components/SuperTodoList';

const App = () => {

    const tasks = [
        { id: '1', title: "HTML", isDone: true },
        { id: '2', title: "CSS", isDone: true },
        { id: '3', title: "JS/TS", isDone: false },
      ];

  return (
    <div>
        <div>
            <SuperButton color={'red'} callBack={()=> {}}>RED SUPPER BUTTON</SuperButton>
            <SuperButton callBack={()=> {}}>DEFAULT SUPPER BUTTON</SuperButton>
            <SuperButton callBack={()=> {}} disabled>DISABLED SUPPER BUTTON</SuperButton>
            <SuperButton color={'secondary'} callBack={()=> {}} >SECONDARY SUPPER BUTTON</SuperButton>
        </div>

        <div>

            <div>--------------------------------------------</div>

            <SuperTodoList tasks={tasks}>
                <div>
                    <SuperButton color={'red'} callBack={()=> {}}>RED SUPPER BUTTON</SuperButton>
                    <SuperButton callBack={()=> {}}>DEFAULT SUPPER BUTTON</SuperButton>
                    <SuperButton callBack={()=> {}} disabled>DISABLED SUPPER BUTTON</SuperButton>
                    <SuperButton color={'secondary'} callBack={()=> {}} >SECONDARY SUPPER BUTTON</SuperButton>
                    <div><input type="text" /></div>
                    <div><input type="text" /></div>
                    <div><input type="text" /></div>
                </div>                
            </SuperTodoList>

            <div>--------------------------------------------</div>

            <SuperTodoList tasks={tasks}>
                <div>some text</div>
            </SuperTodoList>

            <div>--------------------------------------------</div>

            <SuperTodoList tasks={tasks}>
                <div>some text</div>
                <div>some text</div>
                <div>
                    <SuperButton color={'red'} callBack={()=> {}}>RED SUPPER BUTTON</SuperButton>
                    <SuperButton callBack={()=> {}}>DEFAULT SUPPER BUTTON</SuperButton>
                    <SuperButton callBack={()=> {}} disabled>DISABLED SUPPER BUTTON</SuperButton>
                    <SuperButton color={'secondary'} callBack={()=> {}} >SECONDARY SUPPER BUTTON</SuperButton>
                </div>
                <div>some text</div>
            </SuperTodoList>
        </div>
    </div>
  )
}

export default App