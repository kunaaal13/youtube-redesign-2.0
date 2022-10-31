import { configureStore } from '@reduxjs/toolkit'
import videoReducer from './videoSlice'
import searchReducer from './searchSlice'
import userReducer from './userSlice'

export const store = configureStore({
  reducer: {
    video: videoReducer,
    search: searchReducer,
    user: userReducer,
  },
})
