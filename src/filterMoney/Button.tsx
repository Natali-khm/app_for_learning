type propsType = {
    title: string;
    cb: () => void;
}

const Button = (props: propsType) => {

    const buttonHandler = () => { 
        props.cb()
     }
  return <button onClick = {buttonHandler}>{props.title}</button>;
};

export default Button;
