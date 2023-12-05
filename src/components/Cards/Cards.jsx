import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import "./Cards.css"
import Card from './Card';

function Cards() {
  const {todos}= useSelector((state) => state.todos)
  console.log(todos)
  return (
    <div className='flex'>
      <div className="all">
        {
          todos.map((todo,index)=>(
            <Card todo={todo} key={index}/>
          ))
        }
      </div>
    </div>
  )
}

export default Cards
