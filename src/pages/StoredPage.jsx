import { useSelector } from 'react-redux';

const StoredPage = () => {
  
  const val = useSelector(state => state.someValue.value);
  const obj = useSelector(state => state.someObject);
  const arr = useSelector(state => state.arrayObject.items);

  return (
    <div>
        <h1 className='centered paddingTopBottom'>Stored in Redux</h1>
        <div className='row'>
            <div className='col30'>
                <p className='storedListItem'>Number:</p>
            </div>
            <div className='col70'>
                <p className='storedListItem'>{val}</p>
            </div>
        </div>
        <div className='row'>
            <div className='col30'>
                <p className='storedListItem'>ID:</p>
            </div>
            <div className='col70'>
                <p className='storedListItem'>{obj.id}</p>
            </div>
        </div>
        <div className='row'>
            <div className='col30'>
                <p className='storedListItem'>Description:</p>
            </div>
            <div className='col70'>
                <p className='storedListItem'>{obj.description ? obj.description : "Data not available"}</p>
            </div>
        </div>
        <div className='row'>
            <div className='col30'>
                <p className='storedListItem'>Active status:</p>
            </div>
            <div className='col70'>
                <p className='storedListItem'>{obj.isActive ? "active" : "not active"}</p>
            </div>
        </div>
        <div className='row'>
            <div className='col30'>
                <p className='storedListItem'>Elements in array:</p>
            </div>
            <div className='col70'>
                <p className='storedListItem'>
                    {arr.map(a => <span key={a.id} className='badge'>ID={a.id}, value:{a.value}</span>)}
                </p>
            </div>
        </div>
    </div>
  );
}
export default StoredPage;
