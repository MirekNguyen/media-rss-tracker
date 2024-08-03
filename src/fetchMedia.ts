import axios from "axios"

const headers = {
  "accept": "application/graphql+json, application/json",
  "content-type": "application/json",
  "sec-ch-ua": "\"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": "\"macOS\"",
  "x-amzn-sessionid": "145-1394123-9735616",
  "x-imdb-client-name": "imdb-web-next",
  "x-imdb-client-rid": "TG088EBRMPAAY6N8XKAT",
  "x-imdb-user-country": "GB",
  "x-imdb-user-language": "en-GB",
  "x-imdb-weblab-treatment-overrides": "{\"IMDB_INTERESTS_WEB_915922\":\"T1\"}",
  "Referer": "https://www.imdb.com/",
  "Referrer-Policy": "strict-origin-when-cross-origin"
}

export const fetchMedia = async (mediaUrl: string) => {
  const media = await axios.get(mediaUrl, {
    headers
  })
    .then(response => {
      const edges = response.data.data.advancedTitleSearch.edges
      return edges
    })
    .catch(error => {
      console.error('Error:', error);
    });
  return media
}
