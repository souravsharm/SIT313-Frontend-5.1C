import { getByDisplayValue } from '@testing-library/react';
import JobPage from './JobPage';
import React from 'react';

const EmploymentForm = () => {
  return (
    <div className='outline-form' style={{ width: 600, marginLeft: 500, marginTop: 30, alignContent:'left' }}>
      <form className='form-employ'>
        <div className='title' style={{ display: 'flex', background: 'grey', paddingLeft:10}}>Describe your Job</div>
        <div className='label-input-pair' style={{  textAlign:'left' }}>
          <label htmlFor='jobposition'>Title/Position</label>
          <input id='jobposition' type='text' style={{ margin: 20 }} />
        </div>

        <div className='label-input-pair'  style={{   display: 'flex',textAlign:'left',  paddingLeft:0 }}>
          <label htmlFor='jobDescribe' className='jobtext'>Job Description</label>
          <textarea id='jobDescribe' type='text' rows='4' cols='40' style={{ margin: 10 }} />
        </div>

        <div className='label-input-pair' style={{  textAlign:'left' }}>
          <label htmlFor='skill'>Skills</label>
          <input id='skill' type='text' style={{ margin: 20 }} />
        </div>

        <p>Developers will find your job based on the skills you have added here</p>

        <div className='Project' style={{ display: 'flex', background: 'grey', marginTop:20, paddingLeft:10 }}>Project Condition</div>

        <div className='label-input-pair' style={{  textAlign:'left' }}>
          <label htmlFor='pl'>Project length</label>
          <input id='pl' type='text' style={{ margin: 20 }} />
        </div>

        <div className='label-input-pair' style={{  textAlign:'left' }}>
          <label htmlFor='payment-label'>Payment</label>
          <label htmlFor='payment-input-max' style={{ marginLeft: 60 }}>Max</label>
          <input id='payment-input-max' type='number' style={{ margin: 10 }} />
          <label htmlFor='payment-input-min'>Min</label>
          <input id='payment-input-min' type='number' style={{ margin: 10 }} />
        </div>

        <div className='label-input-pair' style={{  textAlign:'left' }}>
          <label htmlFor='working-hours'>Working hours</label>
          <input id='working-hours' type='text' style={{ margin: 20 }} />
        </div>
      </form>
    </div>
  );
};

export default EmploymentForm;
