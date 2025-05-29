import React from 'react'
import { useState } from 'react'
import { quotes } from '../data'

export const Alma = () => {

    const [randomNumber, setRandomNumber] = useState(0)

function barack() {
    setRandomNumber(Math.floor(Math.random() * (quotes.length)))

}
console.log(randomNumber);

  return (
    <>
    <div>
    <button onClick={()=>barack()}>Alma</button>
    </div>
    {randomNumber>-1 && <h1>{quotes[randomNumber]}</h1>}
    </>
  )
}