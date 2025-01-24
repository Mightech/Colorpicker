import React, {useState,useEffect} from 'react'
import './class.css'


const Class = () => {

const [title, setTitle] = useState('')
    const [note, setNote] = useState ('')
    const [notelist, setNotelist]= useState (JSON.parse(localStorage.getItem('key')) || [])

    
    const AddNote = (Props) => {
       if(title && note){
        const newdata ={
            Titlez:title,
              Note:note,
              Date:new Date().toDateString(),

            };
           
            const updatedNotes = ([...notelist, newdata]);
            setNotelist(updatedNotes);
           setTitle('');
           setNote('');
        }
    }
    useEffect(()=>{
       localStorage.setItem('key',JSON.stringify(notelist)) 
    },[notelist]);
  return (
    <div className='container'>
    <div className="wrapper">
        <input type="title" 
        placeholder='Title'
        className='myinput'
        onChange={(e) => {
            setTitle(e.target.value)
            
    
        }}
        value={title}
        
        />
        <textarea  
        type="note"
        placeholder='Enter your Note'
        className='notearea'
        onChange={(e) => {
            setNote(e.target.value)
            
        }}
        value={note}
        > 
        </textarea>
        <button className='Btn'onClick={AddNote}type='button'>Add note</button>
        </div>    
        <div className="output">
            {notelist.map((index,Props)=>(
                <div className="notewrapper"key={index}>
                    {/* <div className="wh">chibuike</div> */}
                    <h3>{Props.Titlez}</h3>
                    <h3>{Props.Note}</h3>
                    <small>{Props.Date}</small>
                </div>
            )
            )}
        </div>
      
    </div>
  )
}
   

export default Class
