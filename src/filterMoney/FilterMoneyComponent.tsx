import { MouseEvent } from "react";
import { FilterType, MoneyType } from "./FilterMoneyApp";

type MoneyPropsType = {
  currentMoney: Array <MoneyType>
  onClickHandler: (currency: FilterType)=>void
}

type ButtonPropsType = {
  currencyName: FilterType
  onClickHandler: ()=>void
}

const ButtonComponent = (props: ButtonPropsType) => { return <button onClick = {props.onClickHandler}>{props.currencyName}</button> }

function FilterMoneyComponent(props: MoneyPropsType) {


  return (
    <>
      {props.currentMoney.map((money, ind) => (
        <div key={ind}>
          <span>{money.banknots} </span>
          <span>{money.value}</span>
          <span>{money.number}</span>
        </div>
      ))}
     <ButtonComponent currencyName = {'all'} onClickHandler={() => props.onClickHandler("all")}/>
     <ButtonComponent currencyName = {'dollars'} onClickHandler={() => props.onClickHandler("dollars")}/>
     <ButtonComponent currencyName = {'rubls'} onClickHandler={() => props.onClickHandler("rubls")}/>
    </>
  );
}

export default FilterMoneyComponent;
