import { FilterType, MoneyType } from "./FilterMoneyApp";

type MoneyPropsType = {
  currentMoney: Array <MoneyType>
  onClickHandler: (currency: FilterType)=>void
}

function FilterMoneyComponent(props: MoneyPropsType) {


  return (
    <>
      {props.currentMoney.map((money, ind) => (
        <div key={ind}>
          <span>{money.banknots + " "}</span>
          <span>{money.value + " "}</span>
          <span>{money.number + " "}</span>
        </div>
      ))}
      <button onClick={(event) => props.onClickHandler("all")}>all</button>
      <button onClick={(event) => props.onClickHandler("dollars")}>dollars</button>
      <button onClick={(event) => props.onClickHandler("rubls")}>rubls</button>
     </>
  );
}

export default FilterMoneyComponent;
