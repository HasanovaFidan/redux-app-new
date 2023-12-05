import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector, useDispatch } from 'react-redux'
import { deleteNote } from '../../Slice/slice';
function Card({todo}) {
  const dispatch = useDispatch()
  return (
    <div>
        <div className="card">
           <div className="card__title" style={{backgroundColor:todo.color}}>
           <h2>{todo.title} </h2> <RiDeleteBin6Line  onClick={()=>dispatch(deleteNote(todo.id))}/>
            
           </div>
         <div className="divo">
         <p>{todo.content}</p>
         </div>
        </div>
    </div>
  )
}

export default Card
