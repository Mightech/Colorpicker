import React, { useState } from 'react'
import './jumia.css'

const AboutPage = () => {
  const [state, setState]= useState([])
  const status=() =>{
    if(status === state){

    }setState[status]

  }
  return(
<div>
{
    state.length <= 0 ? "noData" : "Welcome"
  }
  <input type='text' placeholder='"Enter your name'/>
  <button onClick={status} type='button'>click</button>
 
</div>

  )
}

//   const [data, setData] = useState()
// //   This is the image

//   const [img, setImage] = useState([
//     "https://ng.jumia.is/cms/0-CMS-MIGRATION-2020/nivea/2025/January/NVA_DEO_712x384.jpg",
//     "https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/0-1Advertising/01Jan/Guiness/712x384_GORDONS.jpg",
//     "https://ng.jumia.is/cms/0-1-initiatives/jumia-global/2024/August/shoes-bewlow-9999/712_X_384.png",
    

//   ])


//   const [num, setNum] = useState(0)


// const myNextData = () => {
//     setNum( num + 1)
// }
// const myMusData = () => {
//   if(num <= 0){
//     setNum(0)
//   }else{
//     setNum( num - 1)
//   }

// }



//   return (
//     <div className='card'>
//         <div className='box'></div>
//       <button  className='btn_one' onClick={myMusData}>-</button>
//       <img src={img[num % img.length]} alt="" /> 
//       <button className='btn_two' onClick={myNextData}>+</button>
//     </div>
//   )
// }

export default AboutPage
