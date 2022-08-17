import PageSubtitle from 'Shared/Constants/PageSubtitle';
import PageTitle from 'Shared/Constants/PageTitle';

export const getTitleCase = (sentences: string) => {
  const words = sentences.split(' ');

  const titleCaseWords = words.map(
    (word: string) => word[0].toUpperCase() + word.slice(1).toLowerCase(),
  );

  return titleCaseWords.join(' ');
};
