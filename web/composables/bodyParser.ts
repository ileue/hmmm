type BodyParserChunk = { string: string; to?: string };

const urlRegex =
  /https:\/\/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/;

const hashtagRegex = /(^|\B)#(?![0-9]+\b)([a-zA-Z0-9]{1,32})(\b|\r)/;

export const bodyParser = (text: string): BodyParserChunk[] => {
  const chunks: BodyParserChunk[] = [];

  while (text.length > 0) {
    const urlMatch = text.match(urlRegex)?.[0];
    const hashtagMatch = text.match(hashtagRegex)?.[0];

    if (!urlMatch && !hashtagMatch) {
      chunks.push({ string: text });
      break;
    }

    if (
      (!urlMatch && hashtagMatch) ||
      (urlMatch &&
        hashtagMatch &&
        text.indexOf(urlMatch) > text.indexOf(hashtagMatch))
    ) {
      const index = text.indexOf(hashtagMatch);
      const noMatchString = text.slice(0, index);
      chunks.push({
        string: noMatchString,
      });
      chunks.push({
        string: hashtagMatch,
        to: `/tag/${hashtagMatch.substring(1)}`,
      });
      text = text.substring(index + hashtagMatch.length);
      continue;
    }

    if (
      (urlMatch && !hashtagMatch) ||
      (urlMatch &&
        hashtagMatch &&
        text.indexOf(urlMatch) < text.indexOf(hashtagMatch))
    ) {
      const index = text.indexOf(urlMatch);
      const noMatchString = text.slice(0, index);
      chunks.push({
        string: noMatchString,
      });
      chunks.push({
        string: urlMatch,
        to: urlMatch,
      });
      text = text.substring(index + urlMatch.length);
      continue;
    }
  }

  return chunks;
};
