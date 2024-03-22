import React from 'react'
import '../../../styles/CardTwo.css'
import { FaQuestionCircle, FaChartBar} from 'react-icons/fa'



export default function CardTwo() {
  return (
    <div className='cardtwo'>
       <div className="cardtwo-top">
         <div>Income</div>
         <div><FaQuestionCircle size={20}/></div>
       </div>
       <div className="cardtwo-bottom">
          <div style={{marginBottom:'20px', display:'flex', justifyContent:'center'}}><FaChartBar size={20} color='gray'/></div>
          <div style={{color:'gray'}}>-Not enough data-</div>
       </div>
    </div>
  )
}
