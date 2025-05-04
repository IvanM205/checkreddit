import './Subreddit.css';

export function Subreddit({ obj }) {
    return (
        <button type="button">
          <img src={obj.src} alt={obj.title} />
          <span>{obj.title}</span>
        </button>
    );
}

