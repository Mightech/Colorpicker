import React, {useState} from 'react';
import './Colorpicker.css'

const Colorpicker = () => {
    const [color, setColor] = useState("#f5f5f5");

    const handlecolorchange = (event) => {
        setColor(event.target.value);

    }
  return (
    <div className='colorpicker-container'>
        <h2>Color Picker</h2>
        <div className="color-display" style={{backgroundColor:color}}>
            <p>MIGHTECH</p>
        </div>
        <label>Select a Color:</label>
        <input type="color" value={color} onChange={handlecolorchange}/>

      
    </div>
  )
}

export default Colorpicker
