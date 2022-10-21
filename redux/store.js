import { configureStore } from '@reduxjs/toolkit'
import videoReducer from './videoSlice'
import searchReducer from './searchSlice'

export const store = configureStore({
  reducer: {
    video: videoReducer,
    search: searchReducer,
  },
})
