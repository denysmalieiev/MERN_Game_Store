import {configureStore} from "@reduxjs/toolkit" 
import GamesReducer from "./getGamesSlice" 

export const store = configureStore({
  reducer:{
    GamesReducer,
  },
}) 


export type AppDispatch = typeof store.dispatch 
export type RootState = ReturnType <typeof store.getState>