import axios from 'axios';
import * as cheerio from 'cheerio';


const url = "https://caching.graphql.imdb.com/?operationName=AdvancedTitleSearch&variables=%7B%22first%22%3A50%2C%22locale%22%3A%22en-GB%22%2C%22releaseDateConstraint%22%3A%7B%22releaseDateRange%22%3A%7B%22end%22%3A%222024-12-31%22%2C%22start%22%3A%222024-01-01%22%7D%7D%2C%22sortBy%22%3A%22POPULARITY%22%2C%22sortOrder%22%3A%22ASC%22%2C%22titleTypeConstraint%22%3A%7B%22anyTitleTypeIds%22%3A%5B%22movie%22%5D%7D%2C%22userRatingsConstraint%22%3A%7B%22aggregateRatingRange%22%3A%7B%22min%22%3A7%7D%2C%22ratingsCountRange%22%3A%7B%22min%22%3A30000%7D%7D%7D&extensions=%7B%22persistedQuery%22%3A%7B%22sha256Hash%22%3A%22f3e9d880ef5404e832446904abc3c455b762cf23c66089c3747ae96dfb3c0065%22%2C%22version%22%3A1%7D%7D";
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

const tvShowsUrl = "https://caching.graphql.imdb.com/?operationName=AdvancedTitleSearch&variables=%7B%22first%22%3A50%2C%22locale%22%3A%22en-GB%22%2C%22releaseDateConstraint%22%3A%7B%22releaseDateRange%22%3A%7B%22end%22%3A%222024-12-31%22%2C%22start%22%3A%222024-01-01%22%7D%7D%2C%22sortBy%22%3A%22POPULARITY%22%2C%22sortOrder%22%3A%22ASC%22%2C%22titleTypeConstraint%22%3A%7B%22anyTitleTypeIds%22%3A%5B%22tvSeries%22%5D%7D%2C%22userRatingsConstraint%22%3A%7B%22aggregateRatingRange%22%3A%7B%22min%22%3A7%7D%2C%22ratingsCountRange%22%3A%7B%22min%22%3A30000%7D%7D%7D&extensions=%7B%22persistedQuery%22%3A%7B%22sha256Hash%22%3A%22f3e9d880ef5404e832446904abc3c455b762cf23c66089c3747ae96dfb3c0065%22%2C%22version%22%3A1%7D%7D"
const tvShowsHeaders = {
  "accept": "application/graphql+json, application/json",
    "content-type": "application/json",
    "sec-ch-ua": "\"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "x-amzn-sessionid": "145-1394123-9735616",
    "x-imdb-client-name": "imdb-web-next",
    "x-imdb-client-rid": "RYX5Q1E06SQ5RQ46XKGA",
    "x-imdb-user-country": "GB",
    "x-imdb-user-language": "en-GB",
    "x-imdb-weblab-treatment-overrides": "{\"IMDB_INTERESTS_WEB_915922\":\"T1\"}",
    "Referer": "https://www.imdb.com/",
    "Referrer-Policy": "strict-origin-when-cross-origin"

}

axios.get(tvShowsUrl, {
  headers
})
  .then(response => {
    const edges = response.data.data.advancedTitleSearch.edges
    // const titles = edges.map((edge: any) => edge.node.title)
    const titles = edges.map((edge: any) => edge.node.title.titleText.text)
    console.log(titles)
  })
  .catch(error => {
    console.error('Error:', error);
  });
