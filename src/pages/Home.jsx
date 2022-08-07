const Home = () => {
  return (
    <div>
      <h1 className="centered paddingTopBottom">Redux Basis</h1>
      <div className="container"><h2>Redux - library for managing global application state</h2></div>
      <div className="container"><h2>Projects uses features of @reduxjs/toolkit library and its recommended approaches</h2></div>
      <div className="container card">
        <h3 className="centered">Actions</h3>
        <br />
        <p>It is a plain JavaScript object that has a <b><i>type</i></b> field. Action looks like an event that describes something that happened in the application.</p>
        <p>The type field should be a string that gives this action a descriptive name: "domain/eventName", where <b><i>domain</i></b> is the feature or category that this action belongs to, and <b><i>eventName</i></b> is the specific thing that happened.</p>
        <br />
        <h4 className="marginLeftSmall"><i>Example</i></h4>
        <p className="marginLeftMedium">const action= &#123;</p>
        <p className="marginLeftLarge">type: 'domain/eventName'</p>
        <p className="marginLeftLarge">payload: 'Bla bla bla'</p>
        <p className="marginLeftMedium">&#125;</p>
      </div>
      <div className="container card">
        <h3 className="centered">Action creators</h3>
        <br/>
        <p>Action creator - is a function that creates and returns an <b><i>action</i></b> object</p>
        <br />
        <h4 className="marginLeftSmall"><i>Example</i></h4>
        <p className="marginLeftSmall">const addAction= text =&#123;</p>
        <p className="marginLeftMedium">return &#125;</p>
        <p className="marginLeftLarge">type: 'domain/eventName'</p>
        <p className="marginLeftLarge">payload: text</p>
        <p className="marginLeftMedium">&#125;</p>
        <p className="marginLeftSmall">&#125;</p>
      </div>
      <div className="container card">
        <h3>Reducers</h3>
        <br />
        <p>A reducer - function that receives the current <b><i>state</i></b> and an <b><i>action</i></b> object, decides how to update the state if necessary, and returns the new state: (state, action) =&gt; <b><i>newState</i></b>. Reducer looks like an event listener which handles events based on the received <b><i>action</i></b> (event) type</p>
        <br />
        <h4 className="marginLeftSmall"><i>Example</i></h4>
        <p className="marginLeftSmall">const initialState = &#123; value: 0 &#125;</p>
        <p className="marginLeftSmall">function counterReducer(state = initialState, action) &#123;</p>
        <p className="marginLeftMedium">if (action.type === 'domain/eventName') &#123;</p>
        <p className="marginLeftLarge">return &#123; ...state, value: state.value + 1 &#125; </p>
        <p className="marginLeftMedium">&#125;</p>
        <p className="marginLeftMedium">return state</p>
        <p className="marginLeftSmall">&#125;</p>
      </div>
      <div className="container card">
        <h3>Store</h3>
        <br />
        <p>Store - an object that is used for storing the <b><i>state</i></b>. It requires (takes) the <b><i>reducer</i></b>. Store returns current <b><i>state</i></b> value with method <b><i>getState()</i></b></p>
        <br />
        <h4 className="marginLeftSmall"><i>Example</i></h4>
        <p className="marginLeftSmall">import &#123; configureStore &#125; from '@reduxjs/toolkit'</p>
        <p className="marginLeftSmall">const store = configureStore(&#123; reducer: someReducer &#125;)</p>
      </div>
      <div className="container card">
        <h3>Dispatch</h3>
        <br />
        <p>It's a mechanism of <b><i>state</i></b> update. The Redux <b>store</b> has a method called <b><i>dispatch()</i></b>. It takes an action object as argument and sends it to the store. The store runs reducer and saves new state</p>
        <br />
        <h4 className="marginLeftSmall"><i>Example</i></h4>
        <p className="marginLeftSmall">store.dispatch(&#123; type: 'domain/eventName' &#125;)</p>
      </div>
      <div className="container card">
        <h3>Selectors</h3>
        <br />
        <p>Selectors are functions that know how to extract specific pieces of information from a store state value. As an application grows bigger, this can help avoid repeating logic as different parts of the app need to read the same data</p>
        <br />
        <h4 className="marginLeftSmall"><i>Example</i></h4>
        <p className="marginLeftSmall">const selector = state =&gt; state.value</p>
        <p className="marginLeftSmall">const currentValue = selector(store.getState())</p>
      </div>
    </div>
  );
}
export default Home;
