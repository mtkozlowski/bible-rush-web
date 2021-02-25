const axios = require('axios');
const cheerio = require('cheerio');

const mongoose = require('mongoose');
const { mongoUrl } = require('../config/database');
const BookReferenceModel = require('./BookReferenceModel');

const { plAbbr_noSpace } = require('../vars/bibleVars');

const getChaptersRange = (start, end) => {
  const range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
};

function baseRange(start, end, step, fromRight) {
  let index = -1;
  let length = Math.max(Math.ceil((end - start) / (step || 1)), 0);
  const result = Array(length);

  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }
  return result;
}

async function checkInDb(
  book,
  chapterRangeStart = '',
  versesRangeStart = '',
  chapterRangeEnd = '',
  versesRangeEnd = '',
) {
  const chaptersRange = getChaptersRange(chapterRangeStart, chapterRangeEnd);
  console.log(chaptersRange);

  mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.Promise = global.Promise;
  mongoose.connection.on('error', (err) => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
  });
  const BookReference = mongoose.model(
    'BookReference',
    BookReferenceModel,
    'bookReferences',
  );

  const results = [];
  // for (let i = 0; i < chaptersRange.length; i++) {
  //     const chapter = chaptersRange[i];
  //     const searchQuery = {
  //         abbreviationPLNoWhiteSpace: book,
  //         chapters: {
  //             $elemMatch: {
  //                 number: chapter
  //             }
  //         }
  //     };
  //     const doc = await BookReference
  //         .findOne(searchQuery)
  //         .select({
  //             chapters: {
  //                 $elemMatch: {
  //                     number: chapter
  //                 }
  //             },
  //             _id: 0
  //         })
  //         .lean();
  //     if(doc !== null)
  //         results.push(doc.chapters);
  // }
  // console.table(results);
  const searchQuery = {
    abbreviationPLNoWhiteSpace: book,
    chapter: {
      $in: chaptersRange,
    },
  };

  BookReference.find(searchQuery, function (err, docs) {
    console.log(docs);
  });

  return results;
}

// checkInDb("Rz", 1, 7, 2, 4);

async function destructurizeSiglum(book, rangeStart, rangeEnd) {
  const [chapterRangeStart, versesRangeStart] = rangeStart.split(',');
  const [chapterRangeEnd, versesRangeEnd] = rangeEnd.split(',');

  const bookNumber = plAbbr_noSpace.indexOf(book);

  console.log(`Book: ${bookNumber}`);
  const html = await getHtml(
    `https://biblia.deon.pl/ksiega.php?id=${bookNumber + 1}`,
  );
  const $ = cheerio.load(html, { decodeEntities: true });
  const decoded = $('.tresc .werset').length;
  console.log(`verses count: ${decoded}`);
}

async function getHtml(url = 'https://tlumaczeniahillsong.pl') {
  try {
    const { data: html } = await axios.get(url);
    return html;
  } catch (error) {
    console.log('getHomepageHtml Error: ', error);
  }
}

export default destructurizeSiglum;
