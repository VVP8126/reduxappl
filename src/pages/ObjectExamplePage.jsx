import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setId, setDescription, toggleActive } from './../redux/slice/objectSlice';

const ObjectExamplePage = () => {
  const obj = useSelector(state => state.someObject);
  const dispatch = useDispatch();
  
  const [inputId, setInputId] = useState(0);
  const handleInputIdChange = e => {
    setInputId(Number(e.target.value));
  }

  const [inputDescription, setIinputDescription] = useState(0);
  const handleInputDescriptionChange = e => {
    setIinputDescription(e.target.value);
  }
  
  const [status, setStatus] = useState(false);
  const handleCheckboxChange = e => {
    setStatus(e.target.checked);
  }

  const saveObject = () => {
    dispatch(setId(inputId));
    dispatch(setDescription(inputDescription));
    dispatch(toggleActive(status)); 
    // console.log("InputID=" + inputId + ", DESCR: " + inputDescription + ", active: " + status);
  }

  return (
    <div className='container'>
      <h1 className="centered paddingTopBottom">Storing object in Redux</h1>
      <br />
      <div className='row'>
        <div className='col'>
            <label className='objFieldsLbl'>ID</label>
            <label className='objFieldsLbl'>DESCRIPTION</label>
            <label className='objFieldsLbl'>ACTIVE</label>
        </div>
        <div className='col'>
            <input className='objInput'    type={"number"}   onChange={handleInputIdChange} />
            <input className='objInput'    type={"text"}     onChange={handleInputDescriptionChange} />
            <input className='objCheckbox' type={"checkbox"} onChange={handleCheckboxChange} />
        </div>
        <div className='col'>
            <label className='objFieldsLbl centered'>
                { obj.id > 0 ? obj.id : "ID not set" }
            </label>
            <label className='objFieldsLbl marginLeftMedium  scrolled'>
                { obj.description ? obj.description : "No description provided" }
            </label>
            <label className='objFieldsLbl marginLeftMedium'>
                { obj.isActive ? "Active" : "Not active" }
            </label>
        </div>
      </div>
      <button className='largeBtn' onClick={saveObject} >SAVE</button>
    </div>
  );
}
export default ObjectExamplePage;
