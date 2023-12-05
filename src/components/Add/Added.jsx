import React, { useState } from 'react'
import Input from '../Serach/Input'
import { useSelector, useDispatch } from 'react-redux'
import { addNote } from '../../Slice/slice'
import { nanoid } from 'nanoid'
import './Add.css'

function Added() {
    const [note, setNote] = useState({title:"",content:"",id:"",color:""})
    const [color, setColor] = useState(["red", "blue", "yellow", "skyblue", "orange","pink","aliceBlue"])
    const [currentColor, setCurrentColor] = useState()
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })

    }
    const handleSubmit=()=>{
        note.id=nanoid()
        dispatch(addNote(note))
        setNote({title:"",content:"",id:"",color:""})
        
    }

    return (
        <div className='div'>
            <h1>Dada Redux <span>Note</span>Pad</h1>
            <div className="one__div">

                <input onChange={(e) => { handleChange(e) }} className='title' name='title' value={note.title} type="text" placeholder='Note Title' />
                <input onChange={(e) => {
                    handleChange(e)
                }} type="text" name="content" value={note.content} placeholder='Write Note' />
            </div>
            <div className="two__div">
                <div className="dlex">
                    {
                        color.map((item, index) => (
                            <label key={index} className='colors' htmlFor={item} style={{ backgroundColor: item }}>
                                <input style={{ display: "none" }} type="radio" name="color" value={item} id={item} onChange={(e) => {
                                    handleChange(e)
                                    setCurrentColor(item)
                                }} />
                            </label>
                        ))}
                    <div className="btn">
                        <button onClick={handleSubmit}>Save</button>
                    </div>
                </div>
                <Input />

            </div>
        </div>
    )
}

export default Added
