import './Subreddit.css';
import { chooseSubreddit } from './subredditsSlice';
import { useDispatch } from 'react-redux';

export function Subreddit({ obj }) {
    const dispatch = useDispatch();

    const handleClick = (e) => {
      e.preventDefault();
      dispatch(chooseSubreddit(obj.name));
    }
    return (
        <button type="button" className="subreddit-btn" onClick={handleClick}>
          <div className="subreddit-img-wrapper" style={{ backgroundImage: `url(${obj.src})` }} />
          <span>{obj.title}</span>
        </button>
    );
}

