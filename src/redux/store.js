import {configureStore} from '@reduxjs/toolkit';
import numberReducer from "./slice/someValueSlice";
import objectReducer from "./slice/objectSlice";
import arrayReducer from "./slice/arraySlice";

// Example using @reduxjs/toolkit
// passed 3 reducers in Store - with value, object and array

export default configureStore(
  { reducer: {
      someValue: numberReducer,
      someObject: objectReducer,
      arrayObject: arrayReducer,
  } }
);
