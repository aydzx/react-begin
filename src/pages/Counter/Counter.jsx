// import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Counter.scss';
import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const onClickPlus = () => {
    setCount(count+1);
  };

  const onClickPlus10 = () => {
    setCount(count+10);
  };

  const onClickMinus = () => {
    setCount(count-1);
  };

  const onClickMinus10 = () => {
    setCount(count-10);
  };

  const onClickBack = () => {
    // return <Navigate to="/" />
    navigate('/');
  };

  const onZero = () => {
    setCount(0);
  };

  return (
    <>
        <div className='Counter'>
          <div>
            <h2>Счетчик:</h2>
            <h1>{count}</h1>
            <button onClick={onClickMinus10} className="minus10">- Минус 10</button>
            <button onClick={onClickMinus} className="minus">- Минус</button>
            <button onClick={onClickPlus} className="plus">Плюс +</button>
            <button onClick={onClickPlus10} className="plus10">Плюс 10 +</button> <br/> <br/>
            <button onClick={onZero} className="zero">Обнуление</button> <br/> <br/>
            <button onClick={onClickBack} className="zero">Назад</button>
          </div>
        </div>
    </>
  )
} 