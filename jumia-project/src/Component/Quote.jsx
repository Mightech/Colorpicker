import React, {useState} from 'react'
import './Quote.css'

const Quote = () => {
    const [quote, setQuote]= useState ([
        {
            title: 'title',
            Dates:  new Date().toLocaleDateString(),
            Notetext:"lorem10 gud is the greatest and will all know"


        }
    ]
    
    )
    const AddNote = () => {
        const newData = {
            title: usertitle,
            Dates: new Date().toLocaleDateString(),
            Notetext: userNote
        }
        if (quote === updatetitle && updatenote )
            value={AddNote}
            
              }
              const newData=[...quote, newData]
              setQuote(newData)
        console.log(quote)
        
        const [usertitle, setuserTitle] = useState( )
        
        const [userNote, setuserNote] = useState("")
        
        
        
       const updatetitle = (e) => {
        setuserTitle(e.target.value)
        type="Title"
        value={usertitle}

       }

       const updatenote = (e) => {
        setuserNote(e.target.value)
        type="Note"
        value={userNote}
       }
//           const AddNote = () => {
// if (quote === updatetitle && updatenote )
//     value={AddNote}
//     setQuote ([...quote]); 
//     setuserTitle('');
//     setuserNote('');  
//           }  
                 
            
        
   

  return (
    <div className='container'>
        <div className="wrapper_one">
            <input type="text" className='myinput'placeholder='Title' onChange={updatetitle} />
            <textarea name="text" className='mytext' placeholder='Enter your Note' onChange={updatenote}></textarea>
            <button className='btn'onClick={AddNote}>Add Note</button>
        </div>
        <div className="wrapper_two">
        {
                quote.map((props)=> (
                  <ul>
                    <li>{props}</li>
                  </ul>
                ))
              }
        </div>
      
    </div>
  )
}

export default Quote
