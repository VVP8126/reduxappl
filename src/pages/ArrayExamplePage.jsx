import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { push, removeFirst, removeLast, update } from './../redux/slice/arraySlice';

const ArrayExamplePage = () => {

  const elements = useSelector(state => state.arrayObject.items);
  const dispatch = useDispatch();
  
  const [index, setIndex] = useState(0);
  const [val, setVal] = useState(0);
  const [newVal, setNewVal] = useState(0);
  
  const changeIndexUpdated = e => setIndex(Number(e.target.value));
  const changeValueUpdated = e => setVal(Number(e.target.value));
  const changeNewItemAdded = e => setNewVal(Number(e.target.value));
  
  return (
    <div>
      <h1 className="centered paddingTopBottom">Array example</h1>
      <div className='container row'>
        <h2>Elements in store array (by default):</h2>
          { elements.map(element =>
            <div key={element.id} className='arrayElem'>
              <p className='centered'>{element.value}</p>
            </div>)
          }
      </div>
      <div className='container stateBlock'>
        <h2 className='centered'>Change (update) item</h2>
        <br />
        <div className='row'>
          <div className='col'>
            <label className='changeLbl' htmlFor='indexUpdated'>ID=</label>
            <input className='changeInput' type={'number'} onChange={changeIndexUpdated} />
          </div>
          <div className='col'>
            <label className='changeLbl' htmlFor='indexUpdated'>New value:</label>
            <input className='changeInput' type={'number'} onChange={changeValueUpdated} />
          </div>
          <div className='col'>
            <button className='largeBtn' onClick={ () => dispatch(update(index, val)) }>UPDATE ITEM</button>
          </div>
        </div>
      </div>
      <div className='container stateBlock'>
        <h2 className='centered'>Add new item</h2>
        <br />
        <div className='row'>
            <div className='col50'>
                <input  className='numInput' type={'number'} onChange={changeNewItemAdded} />
            </div>
            <div className='col50'>
                <button className='largeBtn btnWidth50' onClick={() => dispatch(push(newVal))}>ADD NEW ITEM</button>
            </div>
        </div>
      </div>
      <div className='container stateBlock'>
        <h2 className='centered'>Remove elements</h2>
        <br />
        <div className='row'>
          <div className='col50'>
            <button className='largeBtn btnWidth50' onClick={ () => dispatch(removeLast()) }>LAST</button>
          </div>
          <div className='col50'>
            <button className='largeBtn btnWidth50' onClick={ () => dispatch(removeFirst())}>FIRST</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ArrayExamplePage;
