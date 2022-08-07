import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, add, subtract } from './../redux/slice/someValueSlice';

const NumberExamplePage = () => {

  const val = useSelector(state => state.someValue.value);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  
  const onInputValueChange = e => setValue(Number(e.target.value));
  
  return (
    <div className="container">
      <h2 className='centered paddingTopBottom'>Redux number example</h2>
      <div className='stateBlock'>
        <p className='centered'>Data from the state:</p>
        <div className='stateValueLbl'>{val}</div>
      </div>
      <div className='incrementBtnBlock'>
        <button className='largeBtn btnWidth50' onClick={ () => dispatch(increment()) }>Increment</button>
      </div>
      <div className='row'>
        <div className='col'>
          <button className='largeBtn  btnWidth50' onClick={ () => dispatch(add(value))}>ADD(+)</button>
        </div>
        <div className='col'>
          <input className='numInput' type={'number'} value={value} onChange={onInputValueChange} />
        </div>
        <div className='col'>
          <button className='largeBtn  btnWidth50' onClick={ () => dispatch(subtract(value))}>SUBTRACT(-)</button>
        </div>
      </div>
    </div>
  );
}
export default NumberExamplePage;