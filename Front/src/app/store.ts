import { configureStore } from '@reduxjs/toolkit'
import isConnectedSlice from '../features/IsConnected/isConnectedSlice'

export const store = configureStore({
  reducer: {
    isConnected: isConnectedSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch