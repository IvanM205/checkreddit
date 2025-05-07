import { selectSubreddits } from './subredditsSlice';
import { useSelector } from 'react-redux';
import { Subreddit } from './Subreddit';

export function Subreddits() {
    const subreddits = useSelector(selectSubreddits);
    const array = subreddits.array;
    return (
        <div className="subreddits">
          <h2>Subreddits</h2>
          <div className="subreddits-content">
            {(array.length > 0) ? (array.map(obj => {
              return (<article key={obj.id}>
                  <Subreddit obj={obj} />
              </article>)
            })) : (<span>No subreddits available</span>)}
          </div>
        </div>
    );
}