import { createContext,useContext,useReducer } from "react";

export const StateContext=createContext();

export const Stateprovider= ({Reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(Reducer,initialState)}>
        {children} 
    </StateContext.Provider>

);

export const useStateValue=()=>useContext(StateContext)