import "./App.css";
import StoryList from "./StoryList";
import Sentiment from "./Sentiment";
import SearchForm from "./SearchForm";
import { useState, useEffect } from "react";
const server = "http://localhost:3005/";

function App() {
  const [stories, setStories] = useState(false);
  const [ticker, setTicker] = useState("AMZN");

  console.log("ticker value", ticker);

  useEffect(() => {
    fetch(`${server}${ticker}/news`)
      .then((res) => res.json())
      .then(
        (res) => {
          setStories(res.data);
        },
        (err) => {
          console.log(err);
        }
      );
  }, [ticker]);

  return (
    <div className="app-container">
      <SearchForm setTicker={setTicker} />
      <Sentiment stories={stories} />
      <StoryList stories={stories} />
    </div>
  );
}

export default App;
