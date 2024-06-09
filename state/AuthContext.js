import {createContext, useReducer} from 'react'
import AuthReducer from './AuthReducer';

// 最初のユーザ状態を定義
const initialState = {
  // user: null,
  user: {
    _id: '6662eeade6a30a2c24d4e683',
    username: 'shin-code',
    email: 'shincode@email',
    Password: '123456',
    profilePicture: '/person/1.jpeg',
    coverPicture: '',
    followers: [],
    followings: [],
    isAdmin: false,
  },
  isFetching: false,
  error: false,
};

// 状態をグローバルに管理する
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  return <AuthContext.Provider value={{
    user: state.user,
    isFetching: state.isFetching,
    error: state.error,
    dispatch,
  }}>
    {children}
  </AuthContext.Provider>
}