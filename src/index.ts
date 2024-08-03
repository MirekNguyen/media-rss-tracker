import * as fs from 'fs';
import { fetchMedia } from './fetchMedia';
import RSS from 'rss';
import dotenv from 'dotenv';
import { MOVIES_URL, TV_SHOWS_URL } from './url';
import type { Media } from './types';

const descriptionFormatter = (title: Media) => {
  return `Image: ${title.image}<br>Rating: ${title.rating}<br>Votes: ${title.votes}<br>Link: ${title.link}`
}

const main = async () => {
  dotenv.config();
  if (!process.env.MEDIA_TYPE) {
    throw new Error('MEDIA_TYPE is not defined in environment variables.');
  }

  if ((process.env.MEDIA_TYPE !== 'movies' && process.env.MEDIA_TYPE !== 'tv-shows')) {
    throw new Error('Invalid MEDIA_TYPE is defined in environment variables.');
  }

  const host = process.env.HOST || 'localhost';
  const feed = new RSS({ title: 'Movies', feed_url: `https://${host}`, site_url: `https://${host}` })
  const year = new Date().getFullYear();

  const media = await fetchMedia(process.env.MEDIA_TYPE === 'movies' ? MOVIES_URL(year) : TV_SHOWS_URL(year))
  const titles: Media[] = media.map((edge: any) => {
    const item = edge.node.title
    return {
      name: item.titleText.text,
      image: item.primaryImage.url,
      rating: item.ratingsSummary.aggregateRating,
      votes: item.ratingsSummary.voteCount,
      link: `https://www.imdb.com/title/${item.id}/`
    }
  })
  titles.forEach((title: Media) => {
    feed.item({ title: title.name, description: descriptionFormatter(title), url: title.link, date: new Date() })
  });
  const xml = feed.xml()
  fs.writeFileSync('public/out.xml', xml)
}

main();
