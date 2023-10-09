import React from 'react'
import EmploymentForm from './EmploymentForm'
const FreelancerForm = () => {
  return (
    <div>
        
        <EmploymentForm/>
        <div style={{ width: 600, marginLeft: 500, marginTop: 20, alignContent:'left' }}>
        <div className='Experience' style={{ display: 'flex', background: 'grey',  paddingLeft:10 }}>Experience</div>
        <div className='label-input-pair' style={{  textAlign:'left' }}>
          <label>Payment</label>
          <label htmlFor='exp-in' style={{ marginLeft: 30 }}>Experience in</label>
          <input id='exp-in' type='string' style={{ margin: 10, width: 100 }} />
          <label htmlFor='exp-atleast'>For atleast</label>
          <input id='exp-atleast' type='number' style={{ margin: 10, width: 100 }} />
        </div>
        </div>


        

      
    </div>
  )
}

export default FreelancerForm