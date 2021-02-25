const ULTIMATE_REGEX = /((?:\d)?[a-zA-ZąĄżŻźŹćĆśŚęĘńŃłŁóÓ]{1,3})(\d+)?[,:]?(\d+(?:[\.-\d]{0,}))?/;

function recognizeSiglum(text) {
  text = text.replace(/\s/g, "");
  const [input, book = "", chapter = [], versesText = ""] = text.match(
    ULTIMATE_REGEX
  );

  const [
    hasSpecialPattern = false,
    rangeStart,
    rangeEnd,
  ] = checkForSpecialPattern(text);
  if (hasSpecialPattern) {
    return {
      errorMsg: `hasSpecialPattern: ${text}`,
    };
    // const destructurizedSiglum = await destructurizeSiglum("Rz", 2, 2, 4, 2);
  }

  const verses = getVerses(versesText);

  const pascalCaseBook = getStandarizedPascalCaseBook(book);

  return {
    book: pascalCaseBook,
    chapter,
    verses,
  };
}

function getVerses(versesAsText = "") {
  if (versesAsText === "" || versesAsText === null) return [];

  const versesSplitted = versesAsText.split(".").filter((el) => el !== "");

  const versesInArrays = versesSplitted.map(changeVersesAsTextToArrays);
  return [].concat(...versesInArrays);
}

function changeVersesAsTextToArrays(versesRange) {
  const [start, end = -1] = versesRange.split("-").filter((el) => el !== "");

  if (end === -1) return parseInt(start);

  const verses = [];
  for (let i = parseInt(start); i <= parseInt(end); i++) {
    verses.push(parseInt(i));
  }
  return verses;
}

function checkForSpecialPattern(siglum) {
  const rangeAcrossChaptersRegex = /(\d+,\d+)-(\d+,\d+)/;
  const testTrue = "Rz5,8-10,12";
  const testFalse = "Dn3,14-20.91-92.95";
  const [input, start = "", end = ""] =
    siglum.match(rangeAcrossChaptersRegex) || [];

  return [(start + end).length > 0, start, end];
}

function getStandarizedPascalCaseBook(book) {
  return book.charAt(0).toUpperCase() + book.slice(1);
}

export default recognizeSiglum;
