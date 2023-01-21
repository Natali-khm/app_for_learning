type SuperButtonPropsType = {
  name: string;
  callBack: () => void;
};

export const SuperButton: React.FC<SuperButtonPropsType> = (props) => {
  const buttonHandler = () => {
    props.callBack();
  };

  return <button onClick={buttonHandler}>{props.name}</button>;
};
