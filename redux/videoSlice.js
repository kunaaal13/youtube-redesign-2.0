import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  videos: null,
  nextPageToken: '',
  activeCategory: 'All',
  loading: false,
}

export const fetchVideos = createAsyncThunk(
  'feed/AddVideos',
  async (category, thunkAPI) => {
    if (category === 'All') {
      try {
        const res = await axios.get(
          'https://youtube.googleapis.com/youtube/v3/videos',
          {
            params: {
              key: process.env.NEXT_PUBLIC_YT_API_KEY,
              part: 'snippet, contentDetails, statistics',
              chart: 'mostPopular',
              regionCode: 'IN',
              maxResults: 20,
            },
          }
        )

        return res.data
      } catch (error) {
        console.log(error)
        thunkAPI.rejectWithValue('Error in all videos')
      }
    } else {
      try {
        const res = await axios.get(
          'https://youtube-v31.p.rapidapi.com/search',
          {
            params: {
              q: category,
              part: 'snippet,id',
              regionCode: 'IN',
              maxResults: 12,
              order: 'date',
            },
            headers: {
              'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
              'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
            },
          }
        )

        return res.data
      } catch (error) {
        console.log(error)
        thunkAPI.rejectWithValue('Error in category videos')
      }
    }
  }
)

export const fetchMoreVideos = createAsyncThunk(
  'feed/AddMoreVideos',
  async ({ category, nextPageToken }, thunkAPI) => {
    if (category === 'All') {
      try {
        const res = await axios.get(
          'https://youtube.googleapis.com/youtube/v3/videos',
          {
            params: {
              key: process.env.NEXT_PUBLIC_YT_API_KEY,
              part: 'snippet, contentDetails, statistics',
              chart: 'mostPopular',
              regionCode: 'IN',
              maxResults: 12,
              nextPageToken: nextPageToken,
            },
          }
        )

        return res.data
      } catch (error) {
        console.log(error)
        thunkAPI.rejectWithValue('Error in all videos')
      }
    } else {
      try {
        const res = await axios.get(
          'https://youtube-v31.p.rapidapi.com/search',
          {
            params: {
              q: category,
              part: 'snippet,id',
              regionCode: 'IN',
              maxResults: 20,
              order: 'date',
              nextPageToken: nextPageToken,
            },
            headers: {
              'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
              'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
            },
          }
        )

        return res.data
      } catch (error) {
        console.log(error)
        thunkAPI.rejectWithValue('Error in category videos')
      }
    }
  }
)

export const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    setVideos: (state, action) => {
      state.videos = action.payload
    },

    deleteVideos: (state, action) => {
      state.videos = null
      state.nextPageToken = null
      state.activeCategory = action.payload.activeCategory
    },

    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload
    },

    setNextPageToken: (state, action) => {
      state.nextPageToken = action.payload
    },

    setLoading: (state, action) => {
      state.loading = action.payload
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchVideos.pending, (state, action) => {
      state.loading = true
    })

    builder.addCase(fetchVideos.fulfilled, (state, action) => {
      state.loading = false
      state.videos = action.payload.items
      state.nextPageToken = action.payload.nextPageToken
    })

    builder.addCase(fetchVideos.rejected, (state, action) => {
      state.loading = false
    })

    // Fetch more videos
    builder.addCase(fetchMoreVideos.pending, (state, action) => {
      state.loading = true
    })

    builder.addCase(fetchMoreVideos.fulfilled, (state, action) => {
      console.log('before', action.payload)
      state.loading = false
      state.videos = [...state.videos, ...action.payload.items]
      state.nextPageToken = action.payload.nextPageToken
      console.log(state.nextPageToken)
    })

    builder.addCase(fetchMoreVideos.rejected, (state, action) => {
      state.loading = false
    })
  },
})

// Action creators are generated for each case reducer function
export const {
  setVideos,
  deleteVideos,
  setLoading,
  setActiveCategory,
  setNextPageToken,
} = videoSlice.actions

// selectors
export const selectVideos = (state) => state.video.videos
export const selectNextPageToken = (state) => state.video.nextPageToken
export const selectActiveCategory = (state) => state.video.activeCategory
export const selectLoading = (state) => state.video.loading

export default videoSlice.reducer
