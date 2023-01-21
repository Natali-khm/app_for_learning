import React from "react";
import styled from "styled-components";
import { MoneyType } from "./App";

type CurrentBankomatPropsType = {
  money: MoneyType;
};

export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

/*   if (props.money.banknotes === "Dollars") {
    return (
      <BanknoteGreen>
        <Name>{props.money.banknotes}</Name>
        <div>{props.money.value}</div>
      </BanknoteGreen>
    );
  }

  if (props.money.banknotes === "RUBLS") {
    return (
      <BanknoteBlue>
        <Name>{props.money.banknotes}</Name>
        <div>{props.money.value}</div>
      </BanknoteBlue>
    );
  } */

  if (props.money.banknotes === "Dollars") {
    return (
      <BanknoteUniversal color={props.money.banknotes === 'Dollars' ? 'green' : 'blue'}>
        <Name>{props.money.banknotes}</Name>
        <div>{props.money.value}</div>
      </BanknoteUniversal>
    );
  }

  else{
    return (
      <BanknoteUniversal>
        <Name>{props.money.banknotes}</Name>
        <div>{props.money.value}</div>
      </BanknoteUniversal>
    );
  }


};

const BanknoteUniversal = styled.div`
  background-color: ${props=> {
      if (props.color === 'green'){ return 'green'}
      else { return 'blue'}
  }};
  width: 400px;
  height: 200px;
  margin: 10px;
`;

const BanknoteBlue = styled.div`
  background-color: #78bcc5;
  width: 400px;
  height: 200px;
  margin: 10px;
`;

/* const BanknoteGreen = styled.div`
  background-color: #78c578;
  width: 400px;
  height: 200px;
  margin: 10px;
`;

const BanknoteBlue = styled.div`
  background-color: #78bcc5;
  width: 400px;
  height: 200px;
  margin: 10px;
`; */

const Banknote = styled.div`
  background-color: #ffffff;
  width: 400px;
  height: 200px;
  margin: 10px;
`;

const Name = styled.div`
    margin-top: 50px;
`

