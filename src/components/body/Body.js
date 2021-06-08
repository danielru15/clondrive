import React from 'react'
import './body.css'
import BottomHeader from '../header/BottomHeader'
import pic from '../../assets/a.png'

const Body = () => {
    return (
       <div className="Body">
           <BottomHeader/>
           <div className="imagen">
              <img src={pic} alt="" />
           </div>
       </div>
    )
}

export default Body
