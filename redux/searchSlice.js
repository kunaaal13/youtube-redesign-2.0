import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  value: '',
  results: null,
  isLoading: false,
}

export const fetchSearchResults = createAsyncThunk(
  'search/fetchSearchResults',
  async (category, thunkAPI) => {
    // Get the current state
    const state = thunkAPI.getState().search
    const { value } = state
    console.log('value', value)

    try {
      const res = await axios.get('https://youtube-v31.p.rapidapi.com/search', {
        params: {
          q: value,
          part: 'snippet,id',
          regionCode: 'IN',
          maxResults: '15',
          order: 'date',
        },

        headers: {
          'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
        },
      })

      return res.data.items
    } catch (error) {
      console.log(error)
      thunkAPI.rejectWithValue('Error in category videos')
    }
  }
)

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.value = action.payload
    },

    setSearchResults: (state, action) => {
      state.results = action.payload
      console.log('results', state.results)
    },

    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
  },

  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchSearchResults.pending, (state, action) => {
      // Add user to the state array
      state.isLoading = true
    })

    builder.addCase(fetchSearchResults.fulfilled, (state, action) => {
      // Add user to the state array
      state.isLoading = false
      state.results = action.payload
    })

    builder.addCase(fetchSearchResults.rejected, (state, action) => {
      state.isLoading = false
      state.results = null
    })
  },
})

// Action creators are generated for each case reducer function
export const { setSearch, setSearchResults, setIsLoading } = searchSlice.actions

// Selectors
export const selectSearch = (state) => state.search.value
export const selectSearchResults = (state) => state.search.results
export const selectSearchLoading = (state) => state.search.isLoading

export default searchSlice.reducer
