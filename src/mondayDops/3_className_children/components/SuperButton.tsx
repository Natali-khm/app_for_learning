import s from './SuperButton.module.css'

type SuperButtonPropsType = {
  callBack: () => void;
  color?: string;
  children?: React.ReactNode;
  size?: number
  disabled?: boolean
};

export const SuperButton: React.FC<SuperButtonPropsType> = (props) => {

    const {callBack, color, children, disabled, ...restProps} = props;
    
    const finalClassName = `${s.button} ${color === 'red' ? s.red : color === 'secondary' ? s.secondary : disabled ? s.disabled : s.default} `


  return <button className={finalClassName}>{children}</button>;
};








// export const SuperButton: React.FC<SuperButtonPropsType> = ({callBack, color, children, ...restProps}) => {
//     console.log(restProps);
    

//   return <button>{children}</button>;
// };
