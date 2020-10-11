import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {

const [people,setPeople]=React.useState(data);

  return(
<>
{people.map((person)=>{
  const {id,name}=person;

  const removeItem=(id)=>{
   // let newPeople = people.filter((person)=>person.id !==id
   // 
   // )
   // setPeople(newPeople);
   setPeople((oldPeople)=>{
     let newPeople = oldPeople.filter((person)=>person.id !==id);
     return newPeople;


   });
  }

return<div className="item" key={id}>
<h4>{name}</h4>
<button className="btn" onClick={()=>removeItem(id)}>Remove Item</button>
</div>
})}
<button className='btn' onClick={()=>setPeople([])}>Clear</button>
</>
  );
};

export default UseStateArray;
