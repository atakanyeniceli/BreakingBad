import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import charactersSlice from './characterSlice'

export const store = configureStore(
    {
        reducer: {
            characters: charactersSlice
        }
    }
)

type RootState = ReturnType<typeof store.getState>
type AppDisPatch = typeof store.dispatch

export const useAppDispatch: () => AppDisPatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector