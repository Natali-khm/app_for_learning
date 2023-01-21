import React from 'react';
import {CurrentBankomat} from "./CurrentBankomat";
import {MoneyType} from "./App";
import styled from 'styled-components';

type CityPropsType = {
    data: Array <MoneyType> //встречаем денюжки
}

export const City = (props: CityPropsType) => {

     const mappedMoney = props.data.map((el: MoneyType, index) => (
        <CurrentBankomat
             key={index}
             money={el}
         />
     )) 


/*      const mappedMoney = props.data.map(el => {
         return (
            <div>
                <span>{el.banknotes}</span>
                <span>{el.number}</span>
                <span>{el.value}</span>
            </div>
         )
     }) */
    return (
        <Wrapper>
            {mappedMoney}
        </Wrapper>
    );
};

//3
// Вроде все норм, ну точнее почти норм- дублирование-это грех. Хотелось бы от него избавиться.
// И StyledComponents нам в этом отлично поможет, ведь он может принимать пропсы!
// Как это сделать в документашке


const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 30px;
`

