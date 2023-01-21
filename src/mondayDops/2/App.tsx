import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import SuperButton from './SuperButton';
import SuperInput from './SuperInput';


type PropsType=
    {
        userId: number,
        id: number,
        title: string,
        completed: boolean
    }

function App() {
  const [data, setData] = useState<Array<PropsType>>([]);
  const [newTitle, setNewTtitle] = useState <string>('')

  function getData() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));
  }

    useEffect(() => {
        getData();
    }, []);



  const mappedTodos = data.map((el) => {
    return (
      <li key={el.id}>
        <span>{el.title}</span>
        <input type="checkbox" checked={el.completed} />
      </li>
    );
  });

  const deleteTodos = () => { setData([]) }
  const showTodos = () => { getData() }
  const addNewTitle = () => {
    setData([{userId: 100200, id: data.length+1, title: newTitle, completed: false }, ...data]);
    setNewTtitle('')
  }

  return (
    <>
      <SuperButton callBack={deleteTodos} name={"delete"} />
      <SuperButton callBack={showTodos} name={"show"} />
      <SuperButton callBack={addNewTitle} name={"add title"} />
      <SuperInput callBack={setNewTtitle} newTitle={newTitle}/>
      <ul>{mappedTodos}</ul>
    </>
  );
}

export default App;























//----------------------------------------------------------------------------------------

// import React, {useEffect, useState} from 'react';
// import './App.css';
// import axios from "axios";
//
//
// type PropsType =
//     {
//         userId: number,
//         id: number,
//         title: string,
//         completed: boolean
//     }
//
// function App() {
//     const [todos, setTodos] = useState<Array<PropsType>>([])
//
//     const axiosRequest=()=>{
//         axios.get('https://jsonplaceholder.typicode.com/todos')
//             .then((res) => {
//                 setTodos(res.data)
//             })
//     }
//
//     useEffect(() => {
//         // fetch('https://jsonplaceholder.typicode.com/todos')
//         //     .then(response => response.json())
//         //     .then(json => setTodos(json))
//
//         // axios.get('https://jsonplaceholder.typicode.com/todos')
//         //     .then((res) => {
//         //         setTodos(res.data)
//         //     })
//
//         axiosRequest()
//     }, [])
//
//     const mapTodos=todos.map(el=>{
//         return (
//             <li>
//                 <span>{el.id} - </span>
//                 <span>{el.title}</span>
//                 <span>{el.completed}</span>
//             </li>
//         )
//     })
//
//     const onClickHandler = () => {
//         setTodos([])
//     }
//
//     const onClickHandlerForRedisplay=()=>{
//         // axios.get('https://jsonplaceholder.typicode.com/todos')
//         //     .then((res) => {
//         //         setTodos(res.data)
//         //     })
//
//         axiosRequest()
//     }
//
//     return (
//         <div className="App">
//             <button onClick={onClickHandler}>CLEAN POSTS</button>
//             <button onClick={onClickHandlerForRedisplay}>REDISPLAY</button>
//             <ul>
//                 {/*{todos.map(el => {*/}
//                 {/*    return (*/}
//                 {/*        <li>*/}
//                 {/*            <span>{el.id} - </span>*/}
//                 {/*            <span>{el.title}</span>*/}
//                 {/*            <span>{el.completed}</span>*/}
//                 {/*        </li>*/}
//                 {/*    )*/}
//                 {/*})}*/}
//
//                 {mapTodos}
//             </ul>
//         </div>
//     );
// }
//
// export default App;
