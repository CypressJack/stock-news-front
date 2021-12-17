export default function Sentiment(props) {
  let pos = 0;
  let neg = 0;
  let sentiment;
  let className;
  if (props.stories) {
    for (const story of props.stories) {
      if (story.sentiment === "Negative") {
        neg++;
      }
      if (story.sentiment === "Positive") {
        pos++;
      }
    }
    if (pos > neg) {
      sentiment = `Today's news sentiment is negative`;
      className = "sentiment" + " neg";
    }
    if (neg > pos) {
      sentiment = `Today's news sentiment is positive`;
      className = "sentiment" + " pos";
    }
    if (pos === neg) {
      sentiment = `Today's news sentiment is neutral`;
      className = "sentiment" + " neut";
    }
  }
  return (
    <div className={className}>
      <p>{sentiment}</p>
      <p>Positive Stories: {pos}</p>
      <p>Negative Stories: {neg}</p>
    </div>
  );
}
