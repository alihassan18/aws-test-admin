import { combineReducers } from 'redux';
// import { pokemonApi } from '../services/poke.service'
import userSlice from './auth.reducer';

const rootReducer = combineReducers({
    // Define a top-level state field named `todos`, handled by `todosReducer`
    // [pokemonApi.reducerPath]: pokemonApi.reducer,
    auth: userSlice
});

export default rootReducer;
