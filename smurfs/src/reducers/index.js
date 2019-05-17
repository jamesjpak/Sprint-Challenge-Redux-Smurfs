/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE
} from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 */

 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
  // updatingSmurf: false
  // deletingSmurf: false
  addingSmurfs: false,
   error: null
 }

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_START:
    return {
      ...state,
      fetchingSmurfs: true,
      error: ''
    }

    case FETCH_SMURF_SUCCESS:
    return {
      ...state,
      fetchingSmurfs: false,
      error: '',
      smurfs: action.payload
    }

    case FETCH_SMURF_FAILURE:
    return {
      ...state,
      fetchingSmurfs: false,
      error: action.payload
    }

    case ADD_SMURF_START:
    return {
      ...state,
      addingSmurf: true
    }

    case ADD_SMURF_SUCCESS:
    return {
      ...state,
      addingSmurf: false,
      smurfs: action.payload,
      error: ''
    }

    default:
    return state;
  }
};

export default reducer;

