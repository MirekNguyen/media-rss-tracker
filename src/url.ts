export const MOVIES_URL = (year: number) => `https://caching.graphql.imdb.com/?operationName=AdvancedTitleSearch&variables=%7B%22first%22%3A50%2C%22locale%22%3A%22en-GB%22%2C%22releaseDateConstraint%22%3A%7B%22releaseDateRange%22%3A%7B%22end%22%3A%22${year}-12-31%22%2C%22start%22%3A%22${year}-01-01%22%7D%7D%2C%22sortBy%22%3A%22POPULARITY%22%2C%22sortOrder%22%3A%22ASC%22%2C%22titleTypeConstraint%22%3A%7B%22anyTitleTypeIds%22%3A%5B%22movie%22%5D%7D%2C%22userRatingsConstraint%22%3A%7B%22aggregateRatingRange%22%3A%7B%22min%22%3A7%7D%2C%22ratingsCountRange%22%3A%7B%22min%22%3A30000%7D%7D%7D&extensions=%7B%22persistedQuery%22%3A%7B%22sha256Hash%22%3A%22f3e9d880ef5404e832446904abc3c455b762cf23c66089c3747ae96dfb3c0065%22%2C%22version%22%3A1%7D%7D`
export const TV_SHOWS_URL = (year: number) => `https://caching.graphql.imdb.com/?operationName=AdvancedTitleSearch&variables=%7B%22first%22%3A50%2C%22locale%22%3A%22en-GB%22%2C%22releaseDateConstraint%22%3A%7B%22releaseDateRange%22%3A%7B%22end%22%3A%22${year}-12-31%22%2C%22start%22%3A%22${year}-01-01%22%7D%7D%2C%22sortBy%22%3A%22POPULARITY%22%2C%22sortOrder%22%3A%22ASC%22%2C%22titleTypeConstraint%22%3A%7B%22anyTitleTypeIds%22%3A%5B%22tvSeries%22%5D%7D%2C%22userRatingsConstraint%22%3A%7B%22aggregateRatingRange%22%3A%7B%22min%22%3A7%7D%2C%22ratingsCountRange%22%3A%7B%22min%22%3A30000%7D%7D%7D&extensions=%7B%22persistedQuery%22%3A%7B%22sha256Hash%22%3A%22f3e9d880ef5404e832446904abc3c455b762cf23c66089c3747ae96dfb3c0065%22%2C%22version%22%3A1%7D%7D`
