import './Post.css';
import { timeAgo } from '../../Helpers/timeAgo';

export function Post({ obj }) {
    
    const time = timeAgo(obj.created);
    return (
        <div className='card'>
            <div className='post-wrapper'>
                <div className='post-votes-container'>

                </div>
                <div className='post-container'>
                    <div className='post-title'>{obj.title}</div>
                    <div className='post-image-container'>
                        <img src={obj.imgSrc} alt='post-image' />
                    </div>
                    <div className='post-details'>
                        <span className='author-details'>{obj.author}</span>
                        <span className='ago'>{time}</span>
                        <span className='post-comments-container'>
                            <button>Comments</button>
                            <span>{obj.commentsNum}</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}