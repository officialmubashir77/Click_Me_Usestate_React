import React, { useState } from 'react'

const App = () => {

  let [count , setCount] = useState(0)

  console.log(count);
  let IncValue = () =>  {

    // console.log(count);
    // count++ ;
    setCount(++count)


  }




  return (


    <div>

      <h1> {count} </h1>

      <button onClick={IncValue}> Click me </button>


    </div>
  )
}

export default App
