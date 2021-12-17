export default function StoryList(props) {
  let stories = [];
  console.log("stories", props.stories);
  if (props.stories) {
    for (const story of props.stories) {
      const StoryListItem = (
        <li className="story">
          <img className="story-img" src={story.image_url} />
          <div className="story-text">
            <h3>{story.title}</h3>
            <p>{story.text}</p>
            <a href={story.news_url}>Link to Story</a>
          </div>
        </li>
      );
      stories.push(StoryListItem);
    }
  }
  return (
    <ul className="story-list">
      {stories.map((story) => {
        return story;
      })}
    </ul>
  );
}
