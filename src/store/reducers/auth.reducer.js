import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';
import { HYDRATE } from 'next-redux-wrapper';

const userAdapter = createEntityAdapter();

const initialState = userAdapter.getInitialState({
    user: null,
    jwt: null,
    isAuth: false,
    onlineUsers: []
});

const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setOnlineUsers(state, action) {
            return {
                ...state,
                onlineUsers: action.payload
            };
        },
        addOnlineUser(state, action) {
            return {
                ...state,
                onlineUsers: [...state.onlineUsers.filter((item) => item !== action.payload), action.payload]
            };
        },
        removeOnlineUser(state, action) {
            return {
                ...state,
                onlineUsers: state.onlineUsers.filter((item) => item !== action.payload)
            };
        },
        setUser(state, action) {
            Cookies.set('user', JSON.stringify(action.payload));
            return {
                ...state,
                user: action.payload,
                userLoading: false,
                isAuth: true
            };
        },
        login(state, action) {
            Cookies.set('jwt', action.payload);
            return {
                ...state,
                jwt: action.payload
            };
        },
        logout(state) {
            Cookies.remove('user');
            Cookies.remove('jwt');
            localStorage.removeItem('referral');
            return {
                ...state,
                jwt: null,
                user: null,
                isAuth: false
            };
        },
        setAuth(state, action) {
            state.auth = action.payload;
        },
        clearAuth(state) {
            state.auth = null;
        },
        setSettings(state, action) {
            Cookies.set('user', { ...state, user: { ...state.user, settings: { ...state.user.settings, ...action.payload } } });
            return {
                ...state,
                user: { ...state.user, settings: { ...state.user.settings, ...action.payload } }
            };
        }
    },
    extraReducers: (builder) => {
        builder.addCase(HYDRATE, (state, action) => {
            console.log('HYDRATE subjectPage', action.payload);

            return {
                ...state,
                ...action.payload.auth
            };
        });
    }
});

export const { setOnlineUsers, addOnlineUser, removeOnlineUser, setUser, userLoading, login, logout, setAuth, clearAuth, setSettings } =
    userSlice.actions;

export default userSlice.reducer;

// Thunk Actions

export const fetchUser = () => async (dispatch) => {
    dispatch(userLoading());
    const jwt = Cookies.get('jwt');
    if (!jwt) {
        dispatch(logout());
        return;
    }

    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/profile`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    });
    dispatch(setUser(response.data?.data));
};

export const createUser = () => async (dispatch) => {
    dispatch(userLoading());
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/profile`);
    dispatch(setUser(response.data?.data));
};

export const updateUser = () => async (dispatch) => {
    dispatch(userLoading());
    const jwt = Cookies.get('jwt');
    if (!jwt) {
        dispatch(logout());
        return;
    }

    const response = await axios.put(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/profile`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    });
    dispatch(setUser(response.data?.data));
};

export const getAuth = () => async (dispatch) => {
    const token = Cookies.get('jwt');
    if (token) {
        dispatch(setAuth(token));
    } else {
        dispatch(clearAuth());
    }
};

// Selectors
export const user = userAdapter.getSelectors((state) => state.user);
