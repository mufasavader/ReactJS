import React, { useState } from 'react';

const UseStateObject = () => {

  //const [person,setPerson]=useState({name:'Mathews', age:23, message:'random message'});
  const [name,setName]=useState('Mathews');
  const [age, setAge]=useState(23);
  const [message, setMessage]=useState('Click the Button')



  const changeMessage=()=>{
    if(message==='Click the Button'){
    setMessage('hello User');}
    else{
      setMessage('Click the Button');
    }
  }

  

  return<>
  <h1>{name}</h1>
   <h1>{age}</h1>
    <h1>{message}</h1>
    <button className='btn' onClick={changeMessage}>change message</button>
  </>;
};

export default UseStateObject;
