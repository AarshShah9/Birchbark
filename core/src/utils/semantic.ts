import natural from 'natural';
const { JaroWinklerDistance } = natural;

const options = {
    ignoreCase: true,
};

const findSimilarWords = (searchTerm: string, tagsList: string[]) => {
    let highestScore = 0;
    let mostSimilarWord = tagsList[0]!;

    tagsList.forEach(tag => {
        const score = JaroWinklerDistance(searchTerm, tag, options);
        if (score > highestScore) {
            highestScore = score;
            mostSimilarWord = tag;
        }
    });

    return mostSimilarWord;
}

export default findSimilarWords;
