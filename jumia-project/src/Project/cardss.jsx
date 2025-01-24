import React from 'react'
import './cardss.css'

const Landingpage = () => {
  return (
    <div className='container'>
        <div className="wrapper">
            <div className="my_input_wrapper">
            <input type='text'placeholder='DD' className='day' maxLength={2}/>
            <input type='text'placeholder='MM'className='month'maxLength={2}/>
            <input type='text'placeholder='YYYY' className='year'maxLength={4} m/>
            </div>
            <button></button>
            <div className="result_wrapper">
                <div className='Wrapper_year'>--</div>
                <div className='Wrapper_year'>--</div>
                <div className='Wrapper_year'>--</div> 



            </div>
        </div>
      
    </div>
  )
}

export default Landingpage
