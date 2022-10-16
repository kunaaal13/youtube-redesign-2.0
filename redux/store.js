import { configureStore } from '@reduxjs/toolkit'
import videoReducer from './videoSlice'

export const store = configureStore({
  reducer: {
    video: videoReducer,
  },
})
