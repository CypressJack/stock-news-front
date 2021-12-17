import "./App.css";
import StoryList from "./StoryList";
import Sentiment from "./Sentiment";
import { useState, useEffect } from "react";
const server = "http://localhost:3005/";

function App() {
  const [stories, setStories] = useState(false);

  useEffect(() => {
    fetch(`${server}AMZN/news`)
      .then((res) => res.json())
      .then(
        (res) => {
          setStories(res.data);
        },
        (err) => {
          console.log(err);
        }
      );
  }, []);

  return (
    <div className="app-container">
      <Sentiment stories={stories} />
      <StoryList stories={stories} />
    </div>
  );
}

export default App;
