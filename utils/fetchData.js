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
