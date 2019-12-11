const cheerio = require('cheerio');
const { getPageContent } = require('../helpers/puppeteer');

const SITE = `https://vk.com/hidemy_name_keys`;

exports.getVPNKeys = async () => {
  try {
    const pageContent = await getPageContent(SITE);
    const $ = cheerio.load(pageContent);
    const firstPost = $('#page_wall_posts div:first-of-type');
    
    const date = firstPost
      .find('.post_date')
      .first()
      .text();
    
    const keys = firstPost
      .find('.wall_post_text')
      .first()
      .text()
      .match(/\d{14}/g);
    
    return { date, keys };
    
  } catch (err) {
    throw err;
  }
};
