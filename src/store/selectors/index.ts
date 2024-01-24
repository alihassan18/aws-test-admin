import { IStoreReducers } from '../../../src/interfaces/store.interface';
import Cookies from 'js-cookie';
import { IUser } from '../../../src/interfaces/user.interface';

export const authSelector = (state: IStoreReducers) => state.auth;
export const userSelector = (state: IStoreReducers) => state.auth.user;
// export const tokenSelector = (state: IStoreReducers) => state.auth.jwt;
// export const cookieUser: IUser = Cookies.getJSON('user')?.user;
