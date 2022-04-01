import {USER_ACTION_TYPES} from './action-type';
import {createContext,useEffect,useReducer} from 'react';
import {createUserDocumentFromAuth, onAuthStateChangedListener } from '../utils/firebase.utlis';
import { createAction } from '../utils/reducer/reducer.utils';
//as the actual value you want to access
export const UserContext = createContext({
    currentUser:null,
    setCurrentUser: ()=> null,
});


const userReducer = (state,action)=>{
    const {type,payload} = action;
    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser:payload
            }
        default:
            return null;
    }
}

const INITIAL_STATE = {currentUser:null}

export const UserProvider = ({children})=>{
    const [{currentUser},dispatch] = useReducer(userReducer,INITIAL_STATE);

    const setCurrentUser = (user) =>{
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER,user));
    }
    const value = {currentUser,setCurrentUser};

    useEffect(()=>{
        const unsubscribe = onAuthStateChangedListener((user)=>{
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unsubscribe;
    },[]);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}