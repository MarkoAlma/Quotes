import React from 'react'
import { useState } from 'react'
import { quotes } from '../data'
import { FaDiceOne,FaDiceTwo,FaDiceThree,FaDiceFour,FaDiceFive,FaDiceSix } from "react-icons/fa"

export const Alma = () => {

    function veletlenszam(min, max) {
	    if (min >= max) {
	        throw new Error("A minimum értéknek kisebbnek kell lennie, mint a maximum érték.");
	    }
	    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
	    return randomNumber;
	}

    const [randomNumber, setRandomNumber] = useState(0)
    const [kockaNumber, setKockaNumber] = useState(1)

    const kockaLista = {
        1: <FaDiceOne/>,
        2: <FaDiceTwo/>,
        3: <FaDiceThree/>,
        4: <FaDiceFour/>,
        5: <FaDiceFive/>,
        6: <FaDiceSix/>,
    }

console.log(randomNumber);

  return (
    <>
    <div>
    <button style={{fontWeight:'bold'}} onClick={()=>setRandomNumber(veletlenszam(0,quotes.length-1))}>New Quote</button>
    </div>
    {randomNumber>-1 && <h1 style={{fontSize:'16px', marginTop:'80px', marginBottom:'20px', minHeight:'75px'}}>{quotes[randomNumber]}</h1>}
    <hr />
    <h1>Dice Roller</h1>
    {kockaNumber>0 && <p style={{fontSize:'50px'}}>{kockaLista[kockaNumber]}</p>}
    <button style={{fontWeight:'bold'}} onClick={()=>setKockaNumber(veletlenszam(1,6))}>Roll Dice</button>
    </>
  )
}