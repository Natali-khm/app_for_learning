type ButtonPropsType = {
  name: string;
  callBack: () => void
};

const Button: React.FC<ButtonPropsType> = (props) => {
  return <button onClick={props.callBack}>{props.name}</button>;
};

export default Button;
