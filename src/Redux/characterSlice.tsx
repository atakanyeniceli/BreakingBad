import { createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import { ICharacter } from '../Interface/character'
import { ICharacterSlice } from '../Interface/characterSlice'



export const fetchCharacters = createAsyncThunk('fetchCharacters', async (offset: number) => {

    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}characters?limit=${12}&offset=${offset}`)
        .then((data) => data)
    return res.data
})

const initialState: ICharacterSlice = {
    information: Array<ICharacter>(),
    limit: false,
    offset: 0,
}


export const charactersSlice = createSlice(
    {
        name: 'character',
        initialState,
        reducers: {
        },
        extraReducers: (builder) => {
            builder.addCase(fetchCharacters.pending, () => {
                console.log('İşlem yapılıyor.')
            });
            builder.addCase(fetchCharacters.fulfilled, (state, action: { payload: Array<ICharacter> }) => {
                if (!state.limit) {
                    state.information.push(...action.payload)
                    state.offset += 12
                    action.payload.length !== 12 ? state.limit = true : state.limit = false
                }
            });
            builder.addCase(fetchCharacters.rejected, () => {
                console.log('İşlem hata verdi.')
            })
        }
    }
)



export default charactersSlice.reducer