import React from "react";
type PropsType = {
  id: string;
  title: string;
  isDone: boolean;
};

type GeneralType = {
  tasks: PropsType[];
  children?: React.ReactNode
};

const SuperTodoList = (props: GeneralType) => {
  return (
    <div>
      <ul>
      {props.tasks.map((t) => {
        return (
          <li key={t.id}>
            <span>{t.id}</span>
            <span>{t.title}</span>
            <input type="checkbox" checked={t.isDone}/>
          </li>
        );
      })}
      </ul>
      {props.children}
    </div>
  );
};

export default SuperTodoList;
