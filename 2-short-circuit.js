import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text,setText]= useState('');
  const [iserror,seterror]=useState(false);

  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return(
    <>
   {/* <h1>{firstValue}</h1>
  <h2>Value : {secondValue}</h2>*/}
  <h1>{text || 'Mufasa Vader'}</h1>
  <button className='btn' onClick={()=>seterror(!iserror)}>toggle error</button>
  {text &&<h1>Hello world</h1>}
  {!text &&<h1>Welcome To React projects</h1>}
  {iserror && <h1>error</h1>}
  {!iserror?<h1></h1>:<div><h1> & More Error.... what did you do wrong?</h1>
  <p>Lets fix that<button className ='btn' onClick={event=>window.location.href="https://github.com/mufasavader"}> Click Here</button></p>
  </div>}

    </>
    );
};

export default ShortCircuit;
