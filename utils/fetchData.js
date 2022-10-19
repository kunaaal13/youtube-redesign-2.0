import axios from 'axios'

export const fetchVideoSSR = async () => {
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
  }
}

// Watch page
export const fetchVideoDetails = async (id) => {
  try {
    const res = await axios.get('https://youtube-v31.p.rapidapi.com/videos', {
      params: {
        part: 'snippet, contentDetails, statistics',
        id: id,
      },
      headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
      },
    })

    return res.data
  } catch (error) {
    console.log(error)
  }
}

// suggested videos
export const fetchSuggestedVideos = async (id) => {
  try {
    const res = await axios.get('https://youtube-v31.p.rapidapi.com/search', {
      params: {
        relatedToVideoId: id,
        part: 'id,snippet',
        type: 'video',
        maxResults: 50,
      },
      headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
      },
    })

    return res.data
  } catch (error) {
    console.log(error)
  }
}

// video comments
export const fetchVideoComments = async (id) => {
  try {
    const res = await axios.get(
      'https://youtube-v31.p.rapidapi.com/commentThreads',
      {
        params: { part: 'snippet', videoId: id, maxResults: 100 },
        headers: {
          'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
        },
      }
    )

    return res.data
  } catch (error) {
    console.log(error)
  }
}

// channel details
export const fetchChannelDetails = async (id) => {
  try {
    const res = await axios.get('https://youtube-v31.p.rapidapi.com/channels', {
      params: { part: 'snippet, statistics', id: id },
      headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
      },
    })

    return res.data
  } catch (error) {
    console.log(error)
  }
}
