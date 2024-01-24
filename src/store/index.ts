import { AnyAction, EntityState, combineReducers, configureStore } from '@reduxjs/toolkit';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import authReducer from './reducers/auth.reducer';
// import tokenMiddleware from "./tokenMiddleware";

type RootState = {
    auth: EntityState<string> & {
        user: null;
        userLoading: boolean;
        xrpBalance: number;
        jwt: null;
    };
    landmap: EntityState<string> & {
        topLandOwners: any;
        topIslandOwners: any;
        topOneIslandOwners: any;
        listings: any;
        lands: any;
        islands: any;
        mylands: any;
        islandOwners: any;
        loading: boolean;
    };
};
const reducer = combineReducers({
    auth: authReducer
    // add any other slices here
});

const rootReducerWithHydration = (state: RootState | undefined, action: AnyAction) => {
    if (action.type === HYDRATE) {
        const nextState: RootState = {
            ...state,
            ...action.payload
        };
        return nextState;
    } else {
        return reducer(state, action);
    }
};
const makeStore = () =>
    configureStore({
        reducer: rootReducerWithHydration,
        devTools: true,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    });

export const wrapper = createWrapper(makeStore);
