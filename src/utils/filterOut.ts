const strip = (value: string) => value.trim().replace(/\s{2,}/, ' ');

const filterOut = (text: string, cursor: number) => {
  const cursorBefore = text.slice(0, cursor);
  const cursorAfter = text.slice(cursor, text.length);

  const filteredBeforeCursor = strip(cursorBefore);
  const filteredAfterCursor = strip(cursorAfter);

  const newText = `${filteredBeforeCursor}${filteredAfterCursor}`;
  const newCursor = filteredBeforeCursor.length;

  return {
    newText,
    newCursor,
  };
};

export default filterOut;
