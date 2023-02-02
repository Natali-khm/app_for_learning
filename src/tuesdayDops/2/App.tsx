import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';
import { TaskType } from '../1_associative_array/Todolist';

export type FilterValuesType = "all" | "active" | "completed";
type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1=v1();
    let todolistID2=v1();

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]:[
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]:[
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });


    function removeTask(tlId: string, id: string) {
        setTasks({
            ...tasks,
            [tlId]: tasks[tlId].filter(t=>t.id !== id)
        })
    }

    function addTask(tlId: string, title: string) {
        let task = {id: v1(), title, isDone: false};
        setTasks({
            ...tasks,
            [tlId]: [...tasks[tlId], task]
        });
    }

    function changeStatus(tlId: string, taskId: string, isDone: boolean) {
        let task = tasks[tlId].find(t => t.id === taskId);
        if (task) {
            setTasks({
                ...tasks,
                [tlId]: tasks[tlId].map(t=> t.id === taskId ? {...t, isDone} : t)
            });
        }

    }


    function changeFilter(tlId: string, value: FilterValuesType) {
        setTodolists(todolists.map(tl=> tl.id === tlId ? {...tl, filter: value} : tl));
    }


    const filterTasks = (tasks: TaskType[], filter: FilterValuesType) => {

        if (filter === "active") {
            return tasks.filter(t => !t.isDone);
        }
        if (filter === "completed") {
            return tasks.filter(t => t.isDone);
        }
        return tasks;

    }


    return (
        <div className="App">

            {todolists.map(tl=> {

                let tasksForTodolist = filterTasks(tasks[tl.id], tl.filter);
                
                return (

                    <Todolist title={tl.title}
                            tasks={tasksForTodolist}
                            removeTask={removeTask}
                            changeFilter={changeFilter}
                            addTask={addTask}
                            changeTaskStatus={changeStatus}
                            filter={tl.filter}
                            tlId={tl.id}
                            key={tl.id}
                    />

                )})
            }
        </div>
    );
}

export default App;
