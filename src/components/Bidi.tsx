/** Isolates Latin runs inside Arabic text so punctuation and neighbours don't get reordered. */
const WORD = "[A-Za-z](?:[A-Za-z0-9.+#/-]*[A-Za-z0-9+#])?";
const LATIN_RUN = new RegExp(`(${WORD}(?:\\s${WORD})*)`, "g");

const Bidi = ({ text }: { text: string }) => (
  <>
    {text
      .replace(/(^|\s)و(?=[A-Za-z])/g, "$1و ")
      .split(LATIN_RUN).map((part, i) =>
      i % 2 ? <bdi key={i}>{part}</bdi> : part
    )}
  </>
);

export default Bidi;
