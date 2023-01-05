import { MouseEvent, useState } from "react";
import FilterMoneyComponent from "./FilterMoneyComponent";

export type FilterType =  'all' | 'dollars' | 'rubls';


export type MoneyType = {
  banknots: string 
  value: number
  number: string

}

function FilterMoneyApp() {

  const [money, setMoney] = useState <Array <MoneyType>> ([
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
  ])      

  const [filter, setFilter] = useState <FilterType>('all')

  let currentMoney = money;

  if (filter === 'dollars') { currentMoney = money.filter(money => money.banknots === 'Dollars') }
  if (filter === 'rubls') { currentMoney = money.filter(money => money.banknots === 'RUBLS') }


  const onClickHandler = (currency: FilterType) => {
    setFilter(currency);
  };

  return  <FilterMoneyComponent currentMoney={currentMoney} onClickHandler={onClickHandler}/>;
}

export default FilterMoneyApp;
